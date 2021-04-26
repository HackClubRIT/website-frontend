<script>
  export let title;
  export let description;
</script>

<div class="w-full py-16 bg-dark text-white">
  <div class="w-3/4 md:w-2/3 mx-auto top-0 md:px-10 text-center">
    <h1 class="text-2xl md:text-6xl">{title}</h1>
    <p class="text-xl w-2/3 mx-auto">
      {description}
    </p>
  </div>
</div>
