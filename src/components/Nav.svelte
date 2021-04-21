<script>
  export let segment;

  function handleHamClick() {
    let hamBar = document.getElementById("hamburgerbtn");
    let mobileMenu = document.getElementById("mobileMenu");

    let classEl = mobileMenu.classList;
    let f = true;

    for (const i in classEl) {
      if (classEl[i] == "hidden") {
        mobileMenu.classList.remove("hidden");
        hamBar.classList.add("hidden");
        f = false;
      }
    }

    if (f) {
      mobileMenu.classList.add("hidden");
      hamBar.classList.remove("hidden");
    }
  }
</script>

<div class="w-full bg-black text-white fixed">
  <div class="w-2/3 mx-auto top-0 px-10">
    <nav class="flex md:justify-between items-center">
      <a href=".">
        <img class="h-24" src="hackFlag.png" alt="logo" />
      </a>
      <a href="." class="flex flex-row justify-between">
        <img
          class="md:hidden m-4 w-8 h-8"
          src="ham.png"
          id="hamburgerbtn"
          alt="menu"
          on:click={handleHamClick}
        />
      </a>

      <ul class="hidden md:flex md:flex-row" id="mobileMenu">
        <li class="m-5 p-5" on:click={handleHamClick}>
          <a aria-current={segment === undefined ? "page" : undefined} href="."
            >Home</a
          >
        </li>
        <li class="m-5 p-5" on:click={handleHamClick}>
          <a
            aria-current={segment === "events" ? "page" : undefined}
            href="events">Events</a
          >
        </li>
        <li class="m-5 p-5" on:click={handleHamClick}>
          <a
            aria-current={segment === "scrapbook" ? "page" : undefined}
            href="scrapbook">Scrapbook</a
          >
        </li>
        <li class="m-5 p-5" on:click={handleHamClick}>
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
