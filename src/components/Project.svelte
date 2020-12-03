<script>
  export let name = "<missing name>";
  export let description = "<missing description>";
  export let url = "<missing url>";
  export let stack = [];
  export let githubUrl = "https://github.com/kumpmati";

  import React from './tech/React.svelte';
  import Svelte from './tech/Svelte.svelte';
  import Vue from './tech/Vue.svelte';
  import Firebase from './tech/Firebase.svelte';
  import Html5 from './tech/HTML5.svelte';
  import NodeJs from './tech/NodeJs.svelte';
  import JavaScript from './tech/JavaScript.svelte';
  import Go from './tech/Go.svelte';

  const svg = (name) => {
    switch(name.toLowerCase()) {
      case "react":
        return React;

      case "vue":
        return Vue;

      case "svelte":
        return Svelte;

      case "firebase":
        return Firebase;

      case "html5":
        return Html5;

      case "nodejs":
        return NodeJs;

      case "javascript":
        return JavaScript;

      case "go":
        return Go;
    }
  }
</script>

<li>
  <div>
    <h2>
      <a target="_blank" referrerpolicy="no-referrer" href={url}>{name}</a>
    </h2>
    <ul>
      {#each stack as tech}
        <span class="tech" title={tech}>
          <svelte:component this={svg(tech)} />
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
    color: var(--text-accent);
  }


  ul {
    padding-left: 1em;
    display: flex;
  }

  .tech {
    margin-right: .5em;
  }

</style>