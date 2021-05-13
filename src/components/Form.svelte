<script>
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import Modal from "./UI/Modal.svelte";
  import NProgress from "nprogress";
  import {
    heading1,
    name,
    email,
    contactno,
    year,
    years,
    dept,
    depts,
    heading2,
    github,
    q1,
    q2,
    q3,
    q4,
    CoC,
  } from "./Helpers/constants";
  import { isEmailValid, isEmpty, isNumber } from "./Helpers/validate";

  // bind
  let agreed = false;
  let enteredName = "";
  let enteredEmail = "";
  let contactNumber = "";
  let enteredYear = "1";
  let enteredDept = "CSE";
  let enteredA1 = "";
  let enteredA2 = "";
  let enteredA3 = "";
  let enteredA4 = "";
  let githubLink = "";
  let content = "";
  // validation
  let nameValid = false;
  let emailValid = false;
  let contactValid = false;
  let answer1Valid = false;
  let answer3Valid = false;
  let linkValid = false;
  let formValid = false;

  const validityMessage = "Please check the checkbox";

  $: nameValid = !isEmpty(enteredName);
  $: emailValid = isEmailValid(enteredEmail);
  $: contactValid = isNumber(contactNumber);
  $: answer1Valid = !isEmpty(enteredA1);
  $: answer3Valid = !isEmpty(enteredA3);
  $: linkValid = !isEmpty(githubLink);
  $: formValid =
    nameValid &&
    emailValid &&
    contactValid &&
    answer1Valid &&
    answer3Valid &&
    linkValid &&
    agreed;

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  });

  async function submitForm(event) {
    const formData = {
      email: enteredEmail,
      data: {
        contactno: contactNumber,
        year: enteredYear,
        dept: enteredDept,
        github: githubLink,
        q1: enteredA1,
        q2: enteredA2,
        q3: enteredA3,
        q4: enteredA4,
        CoC: agreed,
      },
      name: enteredName,
    };
    NProgress.start();
    const res = await fetch(
      "https://hackclub-backend.herokuapp.com/application/",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application / json" },
      }
    ).catch((err) => {
      console.log(err);
    });

    NProgress.done();
    if (!res.ok) {
      if (res.status === 500)
        alert("Please try again later, our server is currently down.");
    } else if (res.status >= 400) {
      alert("The data entered is invalid");
    } else {
      alert(
        "Your application has been submitted sucessfully. We'll get back to you soon."
      );
    }
    const inputs = event.srcElement.querySelectorAll(
      ".field-group .form-fields"
    );
    for (const input of inputs) input.value = "";
    agreed = false;

    dispatch("save");
    window.location.replace("/");
  }
</script>

<div class="md:flex md:items-center h-full md:p-10 w-full">
  <Modal {content} />
  <div class="form-container">
    <form
      on:submit|preventDefault={submitForm}
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/membership"
      method="post"
    >
      <h1 class="text-2xl text-center">
        {heading1}
      </h1>
      <!-- name -->
      <TextInput
        id="name"
        controlType="text"
        label={name}
        valid={nameValid}
        validityMessage="Please enter a valid name"
        on:input={(event) => (enteredName = event.target.value)}
      />
      <!-- email -->
      <TextInput
        id="email"
        controlType="email"
        label={email}
        valid={emailValid}
        validityMessage="Please enter a valid email"
        on:input={(event) => (enteredEmail = event.target.value)}
      />
      <!-- contact no -->
      <TextInput
        id="contactno"
        controlType="text"
        label={contactno}
        valid={contactValid}
        validityMessage="Please enter a valid contact number"
        on:input={(event) => (contactNumber = event.target.value)}
      />
      <!-- year -->
      <div class="field-group">
        <label class="field-label" for="year">{year}</label>
        {#each years as yr}
          <label class="field-label" for="radio">
            <input
              class="form-fields"
              type="radio"
              value={yr}
              bind:group={enteredYear}
              id="year"
            />
            {yr}</label
          >
        {/each}
      </div>
      <!-- dept -->
      <div class="field-group">
        <label class="field-label" for="dept">{dept}</label>
        {#each depts as dpt}
          <label class="field-label" for="radio">
            <input
              class="form-fields"
              type="radio"
              value={dpt}
              bind:group={enteredDept}
              id="dept"
            />
            {dpt}</label
          >
        {/each}
      </div>
      <!-- section 2 -->
      <h1 class="text-2xl text-center">{heading2}</h1>
      <!-- q1 -->
      <TextInput
        id="q1"
        controlType="textarea"
        label={q1}
        rows="8"
        valid={answer1Valid}
        validityMessage="Please answer the question"
        on:input={(event) => (enteredA1 = event.target.value)}
      />
      <!-- q2 -->
      <TextInput
        id="q2"
        controlType="textarea"
        label={q2}
        rows="8"
        on:input={(event) => (enteredA2 = event.target.value)}
      />
      <!-- github -->
      <TextInput
        id="github"
        controlType="text"
        label={github}
        valid={linkValid}
        validityMessage="Please enter a valid link"
        on:input={(event) => (githubLink = event.target.value)}
      />
      <!-- q3 -->
      <TextInput
        id="q3"
        controlType="textarea"
        value=""
        label={q3}
        rows="8"
        valid={answer3Valid}
        validityMessage="Please answer the question"
        on:input={(event) => (enteredA3 = event.target.value)}
      />
      <!-- q4 -->
      <TextInput
        id="q4"
        controlType="textarea"
        value=""
        label={q4}
        rows="8"
        on:input={(event) => (enteredA4 = event.target.value)}
      />
      <!-- checkbox -->
      <div class="field-group">
        <label class="field-label" for="checkbox">
          <input
            class="h5"
            type="checkbox"
            bind:checked={agreed}
            valid={agreed}
            name="checkbox"
            id="checkbox"
          />
          {CoC}</label
        >
        {#if validityMessage && !agreed}
        <p class="text-red p-2">{validityMessage}</p>
      {/if}
      </div>
      <Button type="submit" caption="Apply" disabled={!formValid} />
    </form>
  </div>
</div>
