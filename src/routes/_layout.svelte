<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;

  let mounted = false;
  onMount(() => (mounted = true)); // enables animations on first page load
</script>

<main>
  {#if mounted}
    <Nav {segment} />
    <article>
      <slot />
    </article>
  {/if}
</main>

<style>
  :global(body) {
    background-color: var(--bg);
  }

  article {
    position: relative;
    max-width: 52em;
    padding: 2em;
    border-radius: 0.5em;
    margin: 0 auto;
  }

  @media all and (max-width: 1160px) {
    article {
      margin: 20vh auto;
      margin-bottom: 5vh;
      padding: 0 1.5em;
      top: 0;
      max-width: 100vw;
      height: auto;
    }
  }
</style>
