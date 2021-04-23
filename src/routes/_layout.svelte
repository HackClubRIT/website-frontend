<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="bg-dark font-main">
  <slot />
</main>

<Footer />
