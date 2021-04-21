<script>
  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<svelte:head>
  <title>Hack Club RIT</title>
</svelte:head>

<ul class="fixed top-96 left-0 m-0 p-0 z-1">
  <li>
    <a
      on:click={handleAnchorClick}
      class="block h-10 bg-white text-gray-900 my-2 px-5 leading-10 rounded-r-full hover:bg-gray-900 hover:text-white"
      href="#joinus">Join Us</a
    >
  </li>
  <li>
    <a
      on:click={handleAnchorClick}
      class="block h-10 bg-white text-gray-900 my-2 px-5 leading-10 rounded-r-full hover:bg-gray-900 hover:text-white"
      href="#aboutus">About Us</a
    >
  </li>
  <li>
    <a
      on:click={handleAnchorClick}
      class="block h-10 bg-white text-gray-900 my-2 px-5 leading-10 rounded-r-full hover:bg-gray-900 hover:text-white"
      href="#events">Events</a
    >
  </li>
  <li>
    <a
      on:click={handleAnchorClick}
      class="block h-10 bg-white text-gray-900 my-2 px-5 leading-10 rounded-r-full hover:bg-gray-900 hover:text-white"
      href="#contactus">Contact Us</a
    >
  </li>
</ul>

<div class="text-white">
  <div id="joinus" class="h-96 mx-auto">HJK</div>
  <svg
    class="fill-current text-red-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </svg>

  <div id="aboutus" class="h-96 bg-red-500" />

  <svg
        class="fill-current text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

  <div id="events" class="h-96" />

  <div id="contactus" class="h-96 bg-red-500" />

  <div id="footer" class="h-96" />
</div>

<style>
</style>
