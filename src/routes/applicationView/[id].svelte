<script context="module">
  import * as api from "../../shared/apis";
  export async function preload(page, session) {
    const { id } = page.params;
    const { TOKEN } = session;

    if (!TOKEN) return this.redirect(302, "login");

    let errors = [];
    const { response, json } = await api.get(
      process.env.SAPPER_APP_API_ENDPOINT,
      `application/${id}`,
      session
    );

    if (response.status === 200) {
      return { application: json, session: session, id: id };
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
  import Button from "../../components/UI/Button.svelte";
  import Card from "../../components/UI/Card.svelte";

  export let application = [];
  export let errors = [];
  export let id;
  export let session;

  console.log(session);

  async function handleApprove(val) {
    console.log(val);
    const { response, json } = await api.patch(
      process.env.SAPPER_APP_API_ENDPOINT,
      `application/${id}`,
      { approved: val },
      session
    );

    if (response.status === 200) {
      alert("Update Sucessful");
    } else if (response.status === 401) {
      errors = [...errors, json.detail];
    } else if (response.status === 422) {
      errors = [...errors, json.detail[0].msg];
    } else if (response.status === 500) {
      errors = ["Oops, something went wrong! Try again soon."];
    }
  }
</script>

<Header title={application.name} />

<ul>
  <div class="container">
    {#if errors.length > 0}
      <p class="text-red p-2">{errors[0]}</p>
    {/if}
    <div class="m-4 p-4 text-cyan text-base">
      <Card
        email={application.email}
        data={application.data}
        status={application.status}
      />
    </div>
  </div>
</ul>

<Button caption="Approve" on:click={handleApprove.bind(application.id, true)} />

<Button caption="Reject" on:click={handleApprove.bind(application.id, false)} />
