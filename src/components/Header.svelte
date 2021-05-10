<script>
  export let title;
  export let description;
  export let moreOnThat = "";
  export let extra = "";
</script>

<div class="w-full md:py-16 bg-dark text-white">
  <div class="md:w-2/3 mx-auto top-0 md:px-10 text-center">
    <h1 class="text-2xl md:text-6xl">{title}</h1>
    <p class="text-xl w-2/3 mx-auto">
      {description}
      <br />
      <br />
      {moreOnThat}
    </p>
    <br />
    <p class="text-xl w-2/3 mx-auto">
      {extra}
    </p>
  </div>
</div>
