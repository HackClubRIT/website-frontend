<script>
  export let controlType;
  export let id;
  export let label;
  export let value = null;
  export let rows = null;
  export let valid = true;
  export let validityMessage = "";
  export let options = null;

  let touched = false;
</script>

<div class="field-group">
  <label class="field-label" for={id}>{label}</label>
  {#if controlType === "text"}
    <input
      class="form-fields"
      class:border-red="{!valid && touched}"
      type="text"
      {id}
      {value}
      on:input
      on:blur={() => (touched = true)}
    />
  {:else if controlType === "email"}
    <input
      class="form-fields"
      class:border-red="{!valid && touched}"
      type="email"
      {id}
      {value}
      on:input
      on:blur={() => (touched = true)}
    />
  {:else if controlType === "textarea"}
    <textarea
      class="form-fields"
      class:border-red="{!valid && touched}"
      {rows}
      {id}
      {value}
      on:input
      on:blur={() => (touched = true)}
    />
  {:else if controlType === "radio"}
    {#each options as opt}
      <label class="field-label" for="radio">
        <input
          class="form-fields"
          type="radio"
          value={opt}
          bind:group={value}
          {id}
        />
        {opt}</label
      >
    {/each}
  {/if}
  {#if validityMessage && !valid && touched}
    <p class="text-red p-2">{validityMessage}</p>
  {/if}
</div>
