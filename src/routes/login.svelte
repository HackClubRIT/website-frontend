<script>
  import NProgress from "nprogress";
  import { goto, stores } from "@sapper/app";

  import Button from "../components/UI/Button.svelte";
  import TextInput from "../components/UI/TextInput.svelte";
  import { isEmailValid, isEmpty } from "../components/Helpers/validate";

  const { session } = stores(); 

  let email = "Enter Your Email";
  let password = "Enter Your Password";
  let error;

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

  const handleLogin = async () => {
    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    NProgress.start();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.log(err);
    });
    NProgress.done();
    console.log(res);

    const parsed = await response.json();

    if (parsed.error) {
      error = parsed.error;
    } else {
      $session.token = parsed.access_token;
      goto("/admin-view");
    }
  };
</script>

<div class="md:flex md:items-center h-full md:p-10 w-full">
  <div class="form-container">
    <form
      on:submit|preventDefault={handleLogin}
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      method="post"
    >
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

{#if error}
<p class="text-red p-2">{error}</p>
{/if}
