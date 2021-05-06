<script>
  export let type = "button";
  export let caption;
  export let href = null;
  export let disabled = false;
</script>

{#if href}
  <a class="btn mx-auto" {href}>{caption}</a>
{:else}
  <button class="btn mx-auto" {type} on:click {disabled}>{caption}</button>
{/if}