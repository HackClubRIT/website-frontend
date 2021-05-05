<script>
  import Header from "../components/Header.svelte";
  export let title =
    "Hack Club is a nonprofit network of makers around the world.";
  export let description =
    "Learning to code is uniquely like  gaining a superpower—turning you from a consumer of technology into a creator. So it shouldn’t be taught like a class, it should be a creative, inclusive space. To foster this environment, every Hack Club is student-led & members make self-directed projects.";
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

<!-- Side Navigation -->

<ul class="fixed top-96 left-0 m-0 p-0 z-2 font-main font-bold">
  <li>
    <a on:click={handleAnchorClick} class="anchor" href="#joinus">Join Us</a>
  </li>
  <li>
    <a on:click={handleAnchorClick} class="anchor" href="#aboutus">About Us</a>
  </li>
  <li>
    <a on:click={handleAnchorClick} class="anchor" href="#events">Events</a>
  </li>
  <li>
    <a on:click={handleAnchorClick} class="anchor" href="#contactus"
      >Contact Us</a
    >
  </li>
</ul>

<!-- Content -->

<div id="main" class="text-sm md:text-lg">
  <div id="joinus" class="text-center bg-dark pt-10 px-10">
    <Header {title} {description} />

    <button class="btn"><a href="membership">Join Us</a></button>
  </div>
  <svg
    class="fill-current text-dark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </svg>

  <div id="aboutus" class="container">
    <h2 class="text-xl md:text-2xl">ABOUT US</h2>
    <div class="md:flex justify-between">
      <img class="md:w-1/3 mx-4 my-6 p-4" src="meetings.png" alt="meeting" />
      <div>
        <div class="text-xl font-bold text-cyan">We are Hack Club RIT.</div>
        For starters, we do not break into bank accounts xD.<br /> It's all
        about
        <span class="highlight"
          >being creative and making something awesome with code.</span
        ><br />
        <br />
        Hack Club is an initiative for students by students. Hack Club is a place
        that lets you tinker, break, and rebuild. After all, you can't make an omelet
        without breaking a few eggs. 🍳
        <br /><br />
        Through Hack Club RIT we aim <br />
        - to <span class="font-bold">explore, learn and teach</span> technology
        that is out of reach in the college curriculum to the students. <br />
        - to create a <span class="font-bold">platform for anyone</span> who
        wishes to learn tech. <br />
        - to create a
        <span class="font-bold">community of like-minded people </span> who collaborate
        and help each other and grow together.
      </div>
    </div>
  </div>

  <div id="events" class="container">
    <h2 class="text-2xl">EVENTS</h2>
    <div class="md:flex justify-between">
      <div class="card h-24 w-24 md:h-96 md:w-96" />
      <div class="card h-24 w-24 md:h-96 md:w-96" />
      <div class="card h-24 w-24 md:h-96 md:w-96" />
    </div>
  </div>

  <div id="contactus" class="h-96">
    <div class="container">
      <h2 class="text-2xl">CONTACT US</h2>
    </div>
  </div>
  <svg
    class="fill-current text-dark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </svg>
</div>
