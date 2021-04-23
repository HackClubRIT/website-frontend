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

<!-- Side Navigation -->

<ul class="fixed top-96 left-0 m-0 p-0 z-1 font-main font-bold">
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

<div id="main" class="font-xl">
  <div id="joinus" class="container text-center">
    <h1 class="text-6xl">Hack Club is a nonprofit network of makers around the world.</h1>
    Through Hack Club RIT we aim <br />
      - to explore, learn and teach technology that is out of reach in the college
      curriculum to the students. <br />
      - to create a platform for anyone who wishes to learn tech <br />
      - to create a community of like-minded people who collaborate and help each
      other and grow together<br>
    <button class="btn">Join Us</button>
  </div>
  <svg
    class="fill-current text-darker"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </svg>

  <div id="aboutus" class="h-96 bg-darker">
    <div class="container">
      <h2 class="text-2xl">ABOUT US</h2>
      Learning to code is uniquely like gaining a superpower—
      <br />turning you from a consumer of technology into a creator. <br />So
      it shouldn’t be taught like a class—it should be a creative, inclusive
      space.<br />
      To foster this environment, every Hack Club is student-led & <br />members
      make self-directed projects.
      <br /><br />
      Through Hack Club RIT we aim <br />
      - to explore, learn and teach technology that is out of reach in the college
      curriculum to the students. <br />
      - to create a platform for anyone who wishes to learn tech <br />
      - to create a community of like-minded people who collaborate and help each
      other and grow together
    </div>
  </div>

  <div id="events" class="h-96 bg-darker">
    <div class="container">
      <h2 class="text-2xl">EVENTS</h2>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque atque
      consequuntur ullam repellat! Dolore, quae est quod, adipisci nam
      consequuntur quisquam iure, cum iusto ratione ex ut non omnis.
    </div>
  </div>

  <div id="contactus" class="h-96 bg-darker">
    <div class="container">
      <h2 class="text-2xl">CONTACT US</h2>
      
    </div>
  </div>

  <svg
    class="fill-current text-darker"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,0L60,26.7C120,53,240,107,360,144C480,181,600,203,720,197.3C840,192,960,160,1080,170.7C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </svg>
</div>
