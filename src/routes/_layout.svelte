<script>
	import Nav from '../components/Nav.svelte';
	
	export let segment;
</script>

<main>
	<Nav {segment}/>
  <article>
    <slot></slot>
  </article>
</main>

<style>
  :global(body) {
		background-color: var(--bg);
	}

	article {
		position: relative;
		max-width: 56em;
		padding: 2em;
    border-radius: .5em;
    margin: 0 auto;
  }

  @media all and (max-width: 1160px) {
    article {
      margin: 20vh auto;
      padding: 0 1.5em;
    }
  }
</style>