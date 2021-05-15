<script context="module">
  import * as api from "../../shared/apis";
  export async function preload(page, session) {
    const { id } = page.params;
    const { TOKEN } = session;

    if (!TOKEN) return this.redirect(302, "login");

    let errors = [];
    const { response, json } = await api.get(
      "http://localhost:8000",
      `application/${id}`,
      session
    );

    if (response.status === 200) {
      return { application: json };
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
  import Card from "../../components/UI/Card.svelte";

  export let application = [];
</script>

<Header title="{application.name}" />

<ul>
  <div class="container">
    <div class="m-4 p-4 text-cyan text-base">
      <Card
        email={application.email}
        data={application.data}
        status={application.status}
      />
    </div>
  </div>
</ul>
