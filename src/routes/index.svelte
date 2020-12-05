<svelte:head>
	<title>Matias Kumpulainen</title>
</svelte:head>

<script>
	import PageTransition from '../components/PageTransition.svelte';
  import { baseUrl } from '../misc';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  const snippets = [
    "Web developer",
    "StackOverflow regular",
    "Student",
    "Full-Stack developer",
    "Svelte fan",
    "Happy :-)",
  ];
  let current = 0;

  onMount(async () => {
    // setup timer to change snippet
    setInterval(() => current = (current + 1) % snippets.length, 1500);

    // load extra snippets from github
    try {
      const res = await (await fetch(`${baseUrl}/snippets.txt`)).text();
      const webSnippets = res.split("\n").filter(s => s.trim() !== "");
      snippets.push(...webSnippets);
    } catch {}
  });
</script>

<PageTransition>
	<h1 class="page-title">Matias Kumpulainen</h1>
	<span>
		{#each snippets as option, i}
			{#if i === current}
				<p
					in:fly|local={{ x: 10 }}
					out:fly|local={{ x: -10 }}
				>
					{option}
				</p>
			{/if}
		{/each}
	</span>
</PageTransition>

<style>
  p {
    color: var(--text-subtle);
    position: absolute;
  }
</style>