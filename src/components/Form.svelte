<script>
  // form data
  let heading1 = "Let's Go Over Your Contact Details First";
  let name = "What's your full name?";
  let email = "Share your email id with us";
  let contactno = "Please share your phone number too (WhatsApp)";
  let year = "Please choose your year of study";
  let dept = "Which department are you from?";
  let heading2 = "Tell us more about yourself";
  let q1 =
    "Please tell us in two to three sentences about the most impressive thing you have built or achieved.";
  let q2 = "What is something surprising or amusing you discovered recently?";
  let q3 =
    "Why do you want to join Hack Club RIT and what do you expect from this community?";
  let q4 =
    "Suggest one activity / initiative that we can bring in to help you.";
  let github = "Share a link to your Github profile";
  let CoC = "Have you read the Code of Conduct of Hack Club";

  let years = [1, 2, 3, 4];
  let depts = ["CSE", "ECE", "EEE", "ME", "CE"];

  // bind
  let agreed;
  let enteredYear = 1;
  let enteredDept = "CSE";
</script>

<div class="flex items-center h-full p-10 w-full">
  <div class="form-container">
    <form
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/"
      method="post"
    >
      <h1 class="text-2xl text-center">
        {heading1}
      </h1>

      <!-- name -->
      <div class="field-group">
        <label class="field-label" for="name">{name}</label>
        <input class="form-fields" type="name" name="name" id="name" />
      </div>
      <!-- email -->
      <div class="field-group">
        <label class="field-label" for="email">{email}</label>
        <input class="form-fields" type="email" name="email" id="email" />
      </div>
      <!-- contact no -->
      <div class="field-group">
        <label class="field-label" for="contact-no">{contactno}</label>
        <input
          class="form-fields"
          type="contact-no"
          name="contact-no"
          id="contact-no"
        />
      </div>
      <!-- year -->
      <div class="field-group">
        <p class="field-label">{year}</p>
        {#each years as yr}
          <label class="field-label" for="radio">
            <input
              class="form-fields"
              type="radio"
              value={yr}
              bind:group={enteredYear}
              name="radio"
              id="radio"
            />
            {yr}</label
          >
        {/each}
      </div>
      <!-- dept -->
      <div class="field-group">
        <p class="field-label">{dept}</p>
        {#each depts as dpt}
          <label class="field-label" for="radio">
            <input
              class="form-fields"
              type="radio"
              value={dpt}
              bind:group={enteredDept}
              name="radio"
              id="radio"
            />
            {dpt}</label
          >
        {/each}
      </div>
      <!-- section 2 -->
      <h1 class="text-2xl text-center">{heading2}</h1>
      <!-- q1 -->
      <div class="field-group">
        <label class="field-label" for="q1">{q1}</label>
        <textarea
          rows="10"
          cols="20"
          class="form-fields"
          type="q1"
          name="q1"
          id="q1"
        />
      </div>
      <!-- q2 -->
      <div class="field-group">
        <label class="field-label" for="q2">{q2}</label>
        <textarea
          rows="10"
          cols="20"
          class="form-fields"
          type="q2"
          name="q2"
          id="q2"
        />
        <!-- github -->
        <div class="field-group">
          <label class="field-label" for="github">{github}</label>
          <input class="form-fields" type="github" name="github" id="github" />
        </div>
        <!-- q3 -->
        <div class="field-group">
          <label class="field-label" for="q3">{q3}</label>
          <textarea
            rows="10"
            cols="20"
            class="form-fields"
            type="q3"
            name="q3"
            id="q3"
          />
          <!-- q4 -->
          <div class="field-group">
            <label class="field-label" for="q4">{q4}</label>
            <textarea
              rows="10"
              cols="20"
              class="form-fields"
              type="q4"
              name="q4"
              id="q4"
            />

            <div class="field-group">
              <label class="field-label" for="checkbox">
                <input
                  class="h5"
                  type="checkbox"
                  bind:checked={agreed}
                  name="checkbox"
                  id="checkbox"
                />
                {CoC}</label
              >
            </div>
            <button class="btn mx-auto" type="submit">Apply</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
