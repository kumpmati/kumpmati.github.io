<script>
	import { scale } from 'svelte/transition';
	export let type = scale;
	export let opts = { start: .96, duration: 200 };

	let out = false;
</script>

<div
	transition:type={opts}
	on:outrostart={() => out = true}
	on:outroend={() => out = false}
	class:out
>
	<slot></slot>
</div>

<style>
	div {
		transform-origin: 0 0;
	}

	.out {
		z-index: -1;
		position: absolute;
	}
</style>