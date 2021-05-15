<script>
  import { stores, goto } from "@sapper/app";
  import NProgress from "nprogress";

  import * as api from "../shared/apis";
  import { user } from "../shared/stored";
  import Header from "../components/Header.svelte";
  import Button from "../components/UI/Button.svelte";
  import TextInput from "../components/UI/TextInput.svelte";
  import { isEmailValid, isEmpty } from "../components/Helpers/validate";

  const { session } = stores();

  let email = "Enter Your Email";
  let password = "Enter Your Password";
  let errors = [];

  let enteredEmail = "";
  let enteredPassword = "";

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

  async function handleLogin() {
    errors = [];
    const { response, json } = await api.post(
      process.env.SAPPER_APP_API_ENDPOINT,
      "auth/token",
      { type: "formData", username: enteredEmail, password: enteredPassword }
    );
    if (response.status === 200) {
      user.set(json);
      $session.TOKEN = json.access_token;
      $session.TYPE = json.token_type;
      goto("applicationView/");
    } else if (response.status === 401) {
      errors = [...errors, json.detail];
    } else if (response.status === 422) {
      errors = [...errors, json.detail[0].msg];
    } else if (response.status === 500) {
      errors = ["Oops, something went wrong! Try again soon."];
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
      {#if errors.length > 0}
        <p class="text-red p-2">{errors[0]}</p>
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
