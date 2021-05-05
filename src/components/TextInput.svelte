<script>
  import { isEmailValid } from "./validate";

  export let controlType;
  export let id;
  export let label;
  export let value = null;
  export let rows = null;
  export let email = null;
  export let options = null;
</script>

<div class="field-group">
  <label class="field-label" for={id}>{label}</label>
  {#if controlType === "text"}
    <input class="form-fields" type="text" {id} {value} on:input />
  {:else if controlType === "email"}
    <input
      class="form-fields {isEmailValid(email) ? '' : 'border-red'}"
      type="email"
      {id}
      {value}
      on:input
    />
  {:else if controlType === "textarea"}
    <textarea class="form-fields" {rows} {id} {value} on:input />
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
</div>
