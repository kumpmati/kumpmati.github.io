<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects"
        rel="prefetch">projects</a>
    </li>
    <li>
      <a
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">contact</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;

    padding: 0.5em 0;

    width: 9em;
    height: var(--nav-height);

    z-index: 100;
    background-color: var(--bg-nav);
    backdrop-filter: blur(var(--blur));
    --nav-item-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    width: var(--nav-item-width);
    margin: 0;
    padding: 0;
  }

  li > a {
    border-radius: 0.5em;
    display: block;
    padding: 0.75em 2em;
    margin: 0;
    text-decoration: none;
    transition: padding 50ms, font-weight 50ms;
  }

  [aria-current] {
    padding-left: 2.25em;
    font-weight: bold;
  }

  @media all and (max-width: 1160px) {
    nav {
      width: 100%;
      padding: 0;
      box-sizing: border-box;
    }

    ul {
      max-width: 30em;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    li {
      width: max-content;
    }

    li > a,
    [aria-current] {
      padding: 0.75em 0;
    }
  }
</style>
