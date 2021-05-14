<script context="module">
  import * as api from "../shared/apis";

  export async function preload(page, session) {
    if (page.query.confirmation_token) {
      const url = `users/confirmation?confirmation_token=${page.query.confirmation_token}`;
      const { response, json } = await api.get(session.API_ENDPOINT, url);
      return { confirmed: response.status === 200, message: json };
    }
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import { user } from "../shared/stored";
  import NProgress from "nprogress";

  import Header from "../components/Header.svelte";
  import Button from "../components/UI/Button.svelte";
  import TextInput from "../components/UI/TextInput.svelte";
  import { isEmailValid, isEmpty } from "../components/Helpers/validate";

  export let confirmed = false;
  export let message = "";

  const { page, session } = stores();

  let email = "Enter Your Email";
  let password = "Enter Your Password";
  let success = "";
  let errors = [];

  let enteredEmail = "";
  let enteredPassword = "";

  if ($session.NODE_ENV === "development") {
    enteredEmail = "mod@hackclubrit.com";
    enteredPassword = "password";
  }

  let emailValid = false;
  let passwordValid = false;
  let formValid = false;

  $: emailValid = isEmailValid(enteredEmail);
  $: passwordValid = !isEmpty(enteredPassword);
  $: formValid = emailValid && passwordValid;

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  });

  if ($page.query.confirmation_token) {
    if (confirmed) {
      success = "Your email address has been confirmed!";
    } else {
      if (message !== "" && message.email && message.email.length >= 0) {
        errors = [`Email ${message.email[0]}`];
      } else {
        errors = ["Token is invalid."];
      }
    }
  }

  async function handleLogin() {
    errors = [];
    const { response, json } = await api.post(
      "http://localhost:8000",
      "auth/token",
      { email: enteredEmail, password: enteredPassword }
    );
    if (response.status === 200) {
      success = "Signed in!";
      user.set(json);
    } else if (response.status === 401) {
      success = undefined;
      if (json.error) {
        errors = [...errors, json.error];
      } else {
        errors = [...errors, json.detail];
      }
    } else if (response.status === 500) {
      errors = [
        "Oops, something went wrong! How embarrassing, try again soon.",
      ];
    }
  }
</script>

<svelte:head>
  <title>Join Hack Club</title>
</svelte:head>

<Header title="Login to Hack Club RIT" />

<div class="md:flex md:items-center h-full md:p-10 w-full">
  <div class="form-container">
    <form
      on:submit|preventDefault={handleLogin}
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      method="post"
    >
      {#if success}
        {success}
      {/if}
      {#if errors.length > 0}
        {errors[0]}
      {/if}
      <TextInput
        id="email"
        controlType="email"
        label={email}
        valid={emailValid}
        validityMessage="Please enter a valid email"
        on:input={(event) => (enteredEmail = event.target.value)}
      />
      <TextInput
        id="password"
        controlType="password"
        label={password}
        valid={passwordValid}
        validityMessage="Please enter a valid password"
        on:input={(event) => (enteredPassword = event.target.value)}
      />
      <Button type="submit" caption="Login" disabled={!formValid} />
    </form>
  </div>
</div>
