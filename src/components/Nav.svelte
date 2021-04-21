<script>
  export let segment;
</script>

<div class="w-full bg-black text-white fixed">
  <div class="w-2/3 mx-auto top-0 px-10">
    <nav class="flex md:justify-between">
      <a href=".">
        <img class="h-24" src="hackFlag.png" alt="logo" />
      </a>
      <div class="flex flex-row justify-between">
        <img
          class="fill-current text-red-500 md:hidden bg-black-800"
          src="images/bars-solid.svg"
          id="hamburgerbtn"
          alt="menu"
        />
      </div>

      <ul
        class="hidden bg-red-500 md:bg-transparent md:flex md:flex-row"
        id="mobileMenu"
      >
        <li class="m-5 p-5">
          <a aria-current={segment === undefined ? "page" : undefined} href="."
            >Home</a
          >
        </li>
        <li class="m-5 p-5">
          <a
            aria-current={segment === "events" ? "page" : undefined}
            href="events">Events</a
          >
        </li>
        <li class="m-5 p-5">
          <a
            aria-current={segment === "scrapbook" ? "page" : undefined}
            href="scrapbook">Scrapbook</a
          >
        </li>
        <li class="m-5 p-5">
          <a
            aria-current={segment === "newsletter" ? "page" : undefined}
            href="newsletter">Newsletter</a
          >
        </li>
      </ul>
    </nav>
  </div>
</div>

<style>
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100%);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
</style>
