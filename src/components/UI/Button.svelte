<script>
  export let type = "button";
  export let caption;
  export let href = null;
  export let disabled = false;
</script>

{#if href}
  <a {href}><button class="btn mx-auto">{caption}</button></a>
{:else}
  <button class="btn mx-auto" {type} on:click {disabled}>{caption}</button>
{/if}
