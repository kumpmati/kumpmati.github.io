<script>
  import Nav from '../components/Nav.svelte';
  
  export let segment;
</script>

<Nav {segment}/>
<main>
  <slot></slot>
</main>

<style>
  :global(body) {
    background-color: var(--bg);
  }

	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
    box-sizing: border-box;
    border-radius: .5em;
	}
</style>