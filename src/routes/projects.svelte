<script>
  import { baseUrl } from "../misc.js";
  import PageTransition from "../components/PageTransition.svelte";
  import Project from "../components/Project.svelte";

  const fetchData = (async () => {
    try {
      const response = await fetch(`${baseUrl}/projects.json`);
      return (await response.json()).projects || [];
    } catch {
      return [];
    }
  })();
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<PageTransition>
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
</PageTransition>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
</style>
