<script>
import { onMount } from 'svelte';

  import { set } from '../theme';

  export let defaultScheme = "light";
  const changeTheme = () => {
    defaultScheme = defaultScheme === "light" ? "dark" : "light";
    set(defaultScheme);
  }
</script>

<button on:click={changeTheme}>{defaultScheme}</button>