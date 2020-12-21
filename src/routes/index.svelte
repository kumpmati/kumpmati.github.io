<script>
  import PageTransition from "../components/PageTransition.svelte";
  import { baseUrl } from "../misc";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  const snippets = ["Web Developer"];
  let current = 0;

  onMount(async () => {
    setInterval(() => (current = (current + 1) % snippets.length), 2000);

    try {
      // load snippets from github
      const res = await (await fetch(`${baseUrl}/snippets.txt`)).text();
      const webSnippets = res.split("\n").filter((s) => s.trim() !== "");
      snippets.push(...webSnippets);
    } catch {}
  });
</script>

<svelte:head>
  <title>Matias Kumpulainen - {snippets[current]}</title>
</svelte:head>
<PageTransition>
  <div id="content">
    <h2 in:fly={{ y: -10, delay: 200 }}>Hello, I'm</h2>
    <h1 in:fly={{ y: -10, delay: 400 }}>Matias</h1>
    <span>
      {#each snippets as text, i}
        {#if i === current}
          <p in:fly|local={{ x: 10 }} out:fly|local={{ x: -10 }}>{text}</p>
        {/if}
      {/each}
    </span>
  </div>
</PageTransition>

<svg
  version="1.1"
  viewBox="0 0 1920 1080"
  in:fly|local={{ y: 500 }}
  out:fade|local={{ duration: 0 }}>
  <rect
    in:fly={{ y: 500, duration: 1000 }}
    width="5000"
    height="25"
    x={-500}
    y={500}
    fill="rgb(150, 150, 150)" />
  <rect
    in:fly={{ y: 500, duration: 1000, delay: 500 }}
    width="5000"
    height="100"
    x={-1000}
    y={650}
    fill="rgb(200, 50, 200)" />
  <rect
    in:fly={{ y: 500, duration: 1000, delay: 1000 }}
    width="5000"
    height="300"
    x={-1000}
    y={950}
    fill="rgb(125, 75, 255)" />
</svg>

<style>
  #content {
    position: relative;
    left: 7.5em;
  }

  #content::before {
    content: "";
    position: absolute;

    top: -2.5em;
    left: -5em;

    width: 35em;
    height: 17em;

    border-right: 0.5em solid var(--text-accent);

    transform: skewX(15deg);
    background-color: var(--bg);
    z-index: 2;
  }

  h1,
  h2 {
    z-index: 10;
    position: relative;
    margin: 0;
  }

  h2 {
    color: var(--text-subtle);
  }

  h1 {
    left: -0.05em;
    font-family: "Lobster", cursive;
    font-size: 5em;
  }

  p {
    position: absolute;
    margin: 0.5em 0;

    font-size: 1.25em;
    color: var(--text-subtle);
    z-index: 5;
  }

  rect {
    transform: rotate(-15deg);
  }

  svg {
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    overflow: visible;

    pointer-events: none;
    z-index: -1;
  }

  @media all and (max-width: 1160px) {
    #content {
      width: max-content;
      left: 15vw;
      font-size: 0.85em;
    }

    #content::before {
      max-width: 80vw;
      left: -4em;
    }
  }
</style>
