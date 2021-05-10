<script>
  export let type = "button";
  export let caption;
  export let href = null;
  export let disabled = false;
</script>

{#if href}
  <button class="btn mx-auto"><a {href}>{caption}</a></button>
{:else}
  <button class="btn mx-auto" {type} on:click {disabled}>{caption}</button>
{/if}