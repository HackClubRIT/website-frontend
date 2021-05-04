<script>
  export let fType;
  export let fLabel;
</script>

<div class="field-group">
  <label class="field-label" for={fType}>{fLabel}</label>
  <input class="form-fields" type={fType} name={fType} id={fType} />
</div>
