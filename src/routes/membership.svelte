<script>
  import Header from "../components/Header.svelte";
  import Form from "../components/Form.svelte";
  export let title = "Apply to Hack Club RIT";
  export let description =
    "Hey RITians, we are excited to inform you that Hack Club is being launched on our Campus. As you may know by now, we do not hack into any obscure servers. Our intention is to create an environment where anyone with ideas can collaborate and seek help in their ventures. Hack Club is a place for everyone- artists, tech enthusiasts and programmers alike.If you are interested to join our community, fill up the form and apply. Make sure you're as elaborate & precise as possible with the answers as it would be considered.";
</script>

<svelte:head>
  <title>Join Hack Club</title>
</svelte:head>

<Header {title} {description} />
<Form />