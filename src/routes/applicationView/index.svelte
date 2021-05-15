<script context="module">
  import * as api from "src/shared/apis";
  export async function preload(page, session) {
    const { TOKEN } = session;

    if (!TOKEN) return this.redirect(302, "login");

    let errors = [];
    const { response, json } = await api.get(
      "http://localhost:8000",
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
  import Header from "src/components/Header.svelte";

  export let applications = [];
</script>

<Header title="Membership Applications" />

<ul>
  <div class="container">
    {#each applications as applicant}
      <div
        class="m-4 p-4 form-container text-cyan text-base bg-darkless  cursor-pointer"
      >
        <li>
          <a rel="prefetch" href="applicationView/{applicant.slug}"
            >{applicant.name} <br />{applicant.email}</a
          >
        </li>
      </div>
    {/each}
  </div>
</ul>
