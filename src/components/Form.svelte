<script>
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
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
  let agreed;
  let enteredName = "";
  let enteredEmail = "";
  let contactNumber = "";
  let enteredYear = 1;
  let enteredDept = "CSE";
  let enteredA1 = "";
  let enteredA2 = "";
  let enteredA3 = "";
  let enteredA4 = "";
  let githubLink = "";

  function submitForm() {
    const formData = {
      name: enteredName,
      email: enteredEmail,
      contactno: contactNumber,
      data: {
        year: enteredYear,
        dept: enteredDept,
        github: githubLink,
        q1: enteredA1,
        q1: enteredA2,
        q3: enteredA3,
        q4: enteredA4,
      },
    };

    fetch("https://hackclub-backend.herokuapp.com/application", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": application / json },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch("save");
  }
</script>

<div class="flex items-center h-full p-10 w-full">
  <div class="form-container">
    <form
      on:submit|preventDefault={submitForm}
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/"
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
        valid={!isEmpty(enteredName)}
        validityMessage="Please enter a valid name"
        on:input={(event) => (enteredName = event.target.value)}
      />
      <!-- email -->
      <TextInput
        id="email"
        controlType="email"
        label={email}
        valid={isEmailValid(enteredEmail)}
        validityMessage="Please enter a valid email"
        on:input={(event) => (enteredEmail = event.target.value)}
      />
      <!-- contact no -->
      <TextInput
        id="contactno"
        controlType="text"
        label={contactno}
        valid={!isEmpty(contactNumber) && isNumber(contactNumber)}
        validityMessage="Please enter a valid contact number"
        on:input={(event) => (contactNumber = event.target.value)}
      />
      <!-- year -->
      <TextInput
        id="year"
        controlType="radio"
        value={years[0]}
        label={year}
        options={years}
        on:input={(event) => (enteredYear = event.target.value)}
      />
      <!-- dept -->
      <TextInput
        id="dept"
        controlType="radio"
        value={depts[0]}
        label={dept}
        options={depts}
        on:input={(event) => (enteredDept = event.target.value)}
      />

      <!-- section 2 -->
      <h1 class="text-2xl text-center">{heading2}</h1>
      <!-- q1 -->
      <TextInput
        id="q1"
        controlType="textarea"
        label={q1}
        rows="8"
        valid={!isEmpty(enteredA1)}
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
        valid={!isEmpty(githubLink)}
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
        valid={!isEmpty(enteredA3)}
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
      <!-- checkbox
      <div class="field-group">
        <label class="field-label" for="checkbox">
          <input
            class="h5"
            type="checkbox"
            bind:checked={agreed}
            valid={agreed}
            validityMessage = "Please checkbox"
            name="checkbox"
            id="checkbox"
          />
          {CoC}</label
        >
      </div> -->
      <!-- <Button type="submit" caption="Apply" on:click="{()=>dispatch()}"/> -->
    </form>
  </div>
</div>
