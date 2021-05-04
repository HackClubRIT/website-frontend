<script>
  import TextField from "./Fields/TextField.svelte";
  import Textarea from "./Fields/TextField.svelte";
  import Checkbox from "./Fields/Checkbox.svelte";
  import Radio from "./Fields/Radio.svelte";

  let name = "What's your full name?";
  let email = "Share your email id with us";
  let contactno = "Please share your phone number too (WhatsApp)";
  let year = "Please choose your year of study";
  let dept = "Which department are you from?";

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
</script>

<div class="flex items-center h-full p-10 w-full">
  <div class="form-container">
    <form
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/"
      method="post"
    >
      <h1 class="text-2xl text-center">
        Let's Go Over Your Contact Details First
      </h1>
      <TextField fType="name" fLabel={name} />
      <TextField fType="email" fLabel={email} />
      <TextField fType="contactno" fLabel={contactno} />
      <Radio fLabel={year} fOptions={years} />
      <Radio fLabel={dept} fOptions={depts} />

      <h1 class="text-2xl text-center">Tell us more about yourself</h1>
      <Textarea fType="q1" fLabel={q1} />
      <Textarea fType="q2" fLabel={q2} />
      <TextField fType="github" fLabel={github} />
      <Textarea fType="q3" fLabel={q3} />
      <Textarea fType="q4" fLabel={q4} />

      <Checkbox fLabel={CoC} />
      <button class="btn mx-auto" type="submit">Apply</button>
    </form>
  </div>
</div>
