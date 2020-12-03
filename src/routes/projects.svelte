<svelte:head>
	<title>Projects</title>
</svelte:head>

<script>
  import { baseUrl } from '../misc.js';
  import Project from '../components/Project.svelte';
  const url = `${baseUrl}/projects.json`;

  const fetchData = (async () => {
    try {
      const response = await fetch(url);
      return (await response.json()).projects || [];
    } catch {
      return [];
    }
  })();
</script>

<h1 class="page-title">Projects</h1>

<ul>
  {#await fetchData}
    <p>loading...</p>
  {:then projects}
    {#each projects as project}
      <Project {...project} />
    {/each}
  {:catch err}
    <p>{err.message}</p>
  {/await}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
</style>