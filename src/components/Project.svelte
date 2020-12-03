<script>
  export let name = "<missing name>";
  export let description = "<missing description>";
  export let url = "<missing url>";
</script>

<li>
  <h2><a target="_blank" referrerpolicy="no-referrer" href={url}>{name}</a></h2>
  <p>{description}</p>
</li>

<style>
  li {
    list-style-type: none;
    color: var(--text-accent);
    margin: 2.5em 0;
  }

  p {
    color: var(--text-subtle);
    margin-left: 1em;
  }
</style>