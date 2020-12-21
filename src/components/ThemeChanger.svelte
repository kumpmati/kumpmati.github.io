<script>
  import { onMount } from "svelte";
  import { set, load } from "../theme";

  let current;
  const changeTheme = (scheme) => {
    if (scheme) {
      current = scheme;
    } else {
      current = current === "a" ? "b" : "a";
    }
    set(current);
  };

  onMount(() => {
    current = load("b");
    changeTheme(current);
  });
</script>

<button on:click={() => changeTheme()}> colors </button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 4em;
    height: 2em;

    margin: 0.75em 0;
    margin-left: 2em;

    color: var(--text);
    background-color: transparent;

    outline: 0;
    border: 0;
    border-radius: 2em;

    transition: box-shadow 200ms, border 200ms;
  }

  button:hover {
    color: var(--bg);
    background-color: var(--text-accent);
  }

  button:active,
  button:focus {
    border: 1px solid var(--bg);
    box-shadow: 0 0 0 0.2em var(--text-accent);
  }

  @media all and (max-width: 1160px) {
    button {
      margin-left: 0;
    }
  }
</style>
