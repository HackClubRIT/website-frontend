<script>
  export let fLabel;
  export let fOptions;

  let opt = fOptions[0];

  $: console.log(opt);
</script>

<div class="field-group">
  <p class="field-label">{fLabel}</p>
  {#each fOptions as op}
    <label class="field-label" for="radio">
      <input
        class="form-fields"
        type="radio"
        value={op}
        bind:group={opt}
        name="radio"
        id="radio"
      />
      {op}</label
    >
  {/each}
</div>
