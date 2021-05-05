<script>
  export let type = "button";
  export let caption;
  export let href = null;
</script>

{#if href}
  <a class="btn" {href}>{caption}</a>
{:else}
  <button class="btn mx-auto" {type} on:click>{caption}</button>
{/if}
