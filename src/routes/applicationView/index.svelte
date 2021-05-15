<script context="module">
  import * as api from "../../shared/apis";

  export async function preload(page, session) {
    const { TOKEN } = session;

    if (!TOKEN) return this.redirect(302, "login");

    let errors = [];
    const { response, json } = await api.get(
      process.env.SAPPER_APP_API_ENDPOINT,
      "application",
      session
    );

    if (response.status === 200) {
      return { applications: json };
    } else if (response.status === 401) {
      errors = [...errors, json.detail];
    } else if (response.status === 422) {
      errors = [...errors, json.detail[0].msg];
    } else if (response.status === 500) {
      errors = ["Oops, something went wrong! Try again soon."];
    }
  }
</script>

<script>
  import Header from "../../components/Header.svelte";

  export let applications = [];
  export let errors = [];
</script>

<Header title="Membership Applications" />

<ul>
  <div class="container">
    {#if errors.length > 0}
      <p class="text-red p-2">{errors[0]}</p>
    {/if}
    {#each applications as applicant}
      <div
        class="m-4 p-4 form-container text-cyan text-base bg-darkless  cursor-pointer"
      >
        <li>
          <a rel="prefetch" href={`applicationView/${applicant.id}`}
            >{applicant.name} <br />{applicant.email}</a
          >
        </li>
      </div>
    {/each}
  </div>
</ul>
