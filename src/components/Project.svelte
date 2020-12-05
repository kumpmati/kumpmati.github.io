<script>
  export let name = "<missing name>";
  export let description = "<missing description>";
  export let url = "<missing url>";
  export let stack = [];
  export let githubUrl = "https://github.com/kumpmati";

	import logos from './logos/index.js';
</script>

<li>
  <div>
    <h2>
      <a target="_blank" referrerpolicy="no-referrer" href={url}>{name}</a>
    </h2>
    <ul>
      {#each stack as tech}
        <span class="tech" title={tech}>
          <svelte:component this={logos[tech.toLowerCase()] || null} />
        </span>
      {/each}
    </ul>
  </div>
  <p class="details">{description}</p>
  <a class="details github" target="_blank" referrerpolicy="no-referrer" href={githubUrl}>GitHub</a>
</li>

<style>
  div {
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
    color: var(--text-accent);
    margin: 2.5em 0;
  }

  a {
    text-decoration: none;
  }

  .details {
    color: var(--text-subtle);
    margin: .25em 1em;
  }

  .github {
		font-style: italic;
    color: var(--text-link);
  }

  ul {
    padding-left: 1em;
    display: flex;
  }

  .tech {
    margin-right: .5em;
  }

</style>