<script>
  export let fLabel;

  let agreed;
</script>

<div class="field-group">
  <label class="field-label" for="checkbox">
    <input
      class="h5"
      type="checkbox"
      bind:checked={agreed}
      name="checkbox"
      id="checkbox"
    />
    {fLabel}</label
  >
</div>
