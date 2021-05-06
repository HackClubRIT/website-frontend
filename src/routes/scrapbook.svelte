<script>
  import Header from "../components/Header.svelte";
  
  export let title = "Hack Club RIT’s Scrapbook";
  export let description =
    "A diary of what our Hack Clubbers are learning & making.";
</script>

<svelte:head>
  <title>Scrapbook</title>
</svelte:head>

<Header {title} {description} />


<div class="container grid grid-cols-3 gap-4">
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
  <div class="card h-24 w-24 md:h-96 md:w-96"/>
</div>
