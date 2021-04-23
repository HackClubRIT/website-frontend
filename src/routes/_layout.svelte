<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="relative bg-darker font-main">
  <slot />
</main>

<Footer />
