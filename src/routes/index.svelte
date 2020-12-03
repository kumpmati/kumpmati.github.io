<svelte:head>
	<title>Matias Kumpulainen</title>
</svelte:head>

<script>
  import { fly } from 'svelte/transition';

  const options = [
    "web dev",
    "student",
    "stackoverflow user",
    "happy :-)",
    "likes cats"
  ];

  let visible = 0;
  setInterval(() => visible = (visible + 1) % options.length, 2000);
</script>

<h1>Matias Kumpulainen</h1>
<span>
  {#each options as option, i}
    {#if i === visible}
      <p
        in:fly|local={{ y: -10 }}
        out:fly|local={{ y: 10 }}
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