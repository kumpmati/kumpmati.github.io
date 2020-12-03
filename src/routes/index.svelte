<svelte:head>
	<title>Matias Kumpulainen</title>
</svelte:head>

<script>
  import { baseUrl } from '../misc';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  const snippets = [
    "Web dev",
    "Student",
    "StackOverflow regular",
    "Happy 😎",
    "Full-Stack developer",
    "Svelte fan",
  ];
  let currentIndex = 0;

  onMount(async () => {
    setInterval(() => currentIndex = (currentIndex + 1) % snippets.length, 1500);

    try {
      const res = await (await fetch(`${baseUrl}/snippets.txt`)).text();
      const webSnippets = res.split("\n");
      webSnippets.length > 0 && snippets.push(...webSnippets);
    } catch {}
  });
</script>

<h1>Matias Kumpulainen</h1>
<span>
  {#each snippets as option, i}
    {#if i === currentIndex}
      <p
        in:fly|local={{ x: 10 }}
        out:fly|local={{ x: -10 }}
      >
        {option}
      </p>
    {/if}
  {/each}
</span>

<style>
  p {
    color: var(--text-subtle);
    position: absolute;
  }
</style>