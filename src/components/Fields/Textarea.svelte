<script>
  export let fType;
  export let fLabel;
</script>

<div class="field-group">
  <label class="field-label" for={fType}>{fLabel}</label>
  <textarea
    rows="10"
    cols="80"
    class="form-fields"
    type={fType}
    name={fType}
    id={fType}
  />
</div>
