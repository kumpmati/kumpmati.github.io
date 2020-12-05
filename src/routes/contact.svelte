<svelte:head>
	<title>Contact</title>
</svelte:head>

<script>
	import PageTransition from '../components/PageTransition.svelte';
</script>

<PageTransition>
	<h1 class="page-title">Contact</h1>
	<div>
		<h2>Email</h2>
		<a href="mailto:hello@mvkump.dev">hello@mvkump.dev</a>
	</div>
</PageTransition>

<style>
	div {
		margin-left: 1em;
		color: var(--text-subtle);
	}

	a {
		color: var(--text-link);
	}
</style>