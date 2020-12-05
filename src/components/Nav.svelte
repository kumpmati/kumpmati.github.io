<script>
  import ThemeChanger from './ThemeChanger.svelte';
  
	export let segment;
</script>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
    <li><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects" rel=prefetch>projects</a></li> <!-- Prefetch -->
    <li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a></li>
    <ThemeChanger />
	</ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    width: 9em;
    z-index: 100;
    background-color: var(--bg-nav);
    padding: .25em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    width: 100%;
    margin: .25em 0;
  }

  li > a {
    border-radius: .5em;
    display: block;
    padding: .75em 2em;
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
			box-sizing: border-box;
    }

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    li {
      width: max-content;
    }
  }
</style>
