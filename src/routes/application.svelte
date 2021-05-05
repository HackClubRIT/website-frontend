<script>
  import Header from "../components/Header.svelte";

  export let title = "Apply to Hack Club RIT";
  export let description =
    "Hey RITians, we are excited to inform you that Hack Club is being launched on our Campus. As you may know by now, we do not hack into any obscure servers. Our intention is to create an environment where anyone with ideas can collaborate and seek help in their ventures. Hack Club is a place for everyone- artists, tech enthusiasts and programmers alike.If you are interested to join our community, fill up the form and apply. Make sure you're as elaborate & precise as possible with the answers as it would be considered.";
</script>

<svelte:head>
  <title>Join Hack Club</title>
</svelte:head>

<Header {title} {description} />

<div class="flex items-center h-full p-10 w-full">
  <div class="form-container">
    <form
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/"
      method="post"
    >
      <div class="field-group mb-4 md:w-1/2">
        <label class="field-label" for="first_name">First Name</label>
        <input
          class="form-fields md:mr-2"
          type="text"
          name="first_name"
          id="first_name"
        />
      </div>
      <div class="field-group mb-4 md:w-1/2">
        <label class="field-label md:ml-2" for="last_name">Last Name</label>
        <input
          class="form-fields md:ml-2"
          type="text"
          name="last_name"
          id="last_name"
        />
      </div>
      <div class="field-group mb-4 md:w-full">
        <label class="field-label" for="email">Email</label>
        <input class="form-fields" type="email" name="email" id="email" />
      </div>
      <div class="field-group mb-6 md:w-full">
        <label class="field-label" for="password">Password</label>
        <input class="form-fields" type="password" name="password" id="password" />
      </div>
      <button class="btn mx-auto" type="submit">Apply</button>
    </form>
    <a class="w-full mx-auto text-center text-snow" href="/login"
      >Already have an account?</a
    >
  </div>
</div>
