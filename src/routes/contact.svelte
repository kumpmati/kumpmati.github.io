<script>
  import PageTransition from "../components/PageTransition.svelte";
  import Contact from "../graphics/Contact.svelte";
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<PageTransition>
  <h1 class="page-title">Contact</h1>
  <div class="contact">
    <h2>Email</h2>
    <a href="mailto:hello@mvkump.dev">hello@mvkump.dev</a>
  </div>
  <div class="contact">
    <h2>LinkedIn</h2>
    <a
      href="https://www.linkedin.com/in/matias-kumpulainen-27b4421b9"
      target="_blank"
      referrerpolicy="no-referrer">Matias Kumpulainen</a>
  </div>
  <div id="illustration" in:fly|local={{ y: 100, duration: 500, delay: 500 }}>
    <Contact />
  </div>
</PageTransition>

<style>
  .page-title {
    background: none;
    backdrop-filter: none;
  }

  a {
    color: var(--text-link);
  }

  .contact {
    margin: 2em 1em;
    color: var(--text-subtle);
  }

  #illustration {
    position: relative;
    top: -15em;
    left: 30vw;

    width: max-content;
    overflow: hidden;
    margin: 0;

    opacity: 0.2;
    z-index: -1;
  }

  @media all and (max-width: 1160px) {
    #illustration {
      width: 65vw;
    }
  }
</style>
