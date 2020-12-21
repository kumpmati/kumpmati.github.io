<script>
  import { fly } from "svelte/transition";
  export let type = fly;
  export let outOpts = { x: -100, duration: 500 };
  export let inOpts = { x: 100, duration: 500, delay: 200 };

  let out = false;
</script>

<div
  in:type={inOpts}
  out:type={outOpts}
  on:outrostart={() => (out = true)}
  on:outroend={() => (out = false)}
  class:out>
  <slot />
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
