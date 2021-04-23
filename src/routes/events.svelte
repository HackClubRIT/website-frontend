<script>
  import Header from "../components/Header.svelte";

  export let title = "Hack Club RIT’s Events";
  export let description =
    "Learn to code with us by attending our events and workshops.";
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<Header {title} {description} />

<div class="container grid grid-cols-3 gap-4">
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
  <div class="card h-96 w-96"/>
</div>


