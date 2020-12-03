<script>
  import ThemeChanger from './ThemeChanger.svelte';
  
  export let segment;
</script>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
    <li><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a></li>
    <li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a></li>
    <ThemeChanger />
	</ul>
</nav>

<style>
  nav {
    width: 15em;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--bg-nav);
    padding: .25em 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: .25em 0;
  }

  li > a {
    display: block;
    padding: .75em 2em;
    text-decoration: none;
    transition: padding 50ms, font-weight 50ms;
  }

  [aria-current] {
    padding-left: 2.25em;
    font-weight: bold;
  }
</style>
