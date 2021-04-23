<script>
  import Header from "../components/Header.svelte";

  export let title = "Hack Club RIT’s Newsletter";
  export let description = "A monthly update of what is happening around us.";
</script>

<svelte:head>
  <title>Newsletter</title>
</svelte:head>

<Header {title} {description} />


