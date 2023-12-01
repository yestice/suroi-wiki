<script lang="ts">
  import Icon from "@iconify/svelte";
  import NavBarItem from "./NavBarItem.svelte";
  import SearchBar from "@components/SearchBar.svelte";

  let menuOpen: boolean = false;

  let width: number;

  function toggleMenu() {
    menuOpen = menuOpen ? false : true;
  }

  function keyPress(event: { "key": any; }) {
    if (event.key == ".") {
      toggleMenu()
    }
  }
</script>

<svelte:window bind:innerWidth={width} on:keydown={keyPress} />

<nav
  class="flex flex-row overflow-y-auto md:overflow-y-visible w-full bg-background z-40 border-b-2 border-border p-4 gap-8 not-prose fixed text-foreground"
>
  <button on:click={toggleMenu} class="duration-500 hover:text-primary">
    <Icon icon="lucide:menu" class="h-8 w-8 my-auto" />
  </button>
  <a href="/" class="inline-flex items-center">
    <img src="/img/logo.svg" alt="Suroi Wiki Logo" class="h-8 my-auto" />
  </a>
  {#if width > 768}
    <SearchBar />
  {/if}
</nav>
<nav
  class="fixed top-0 left-0 not-prose
  transition-transform duration-500
  p-4
  flex flex-col bg-background text-white
  z-50 h-full w-full md:max-w-xs
  border-border border-r-2
  {menuOpen ? 'menu-open' : 'menu-closed'}"
>
  <ul class="flex flex-col gap-4 text-lg">
    <button on:click={toggleMenu} class="duration-500 hover:text-primary">
      <Icon icon="lucide:x" class="h-8 w-8" />
    </button>
    <NavBarItem text="Home" url="/" />
    <NavBarItem text="Weapons" url="/weapons" />
    <NavBarItem text="Consumables" url="/consumables" />
    <NavBarItem text="Obstacles" url="/obstacles" />
    <NavBarItem text="Buildings" url="/buildings" unavailable />
    <NavBarItem text="Skins" url="/skins" unavailable />
    <NavBarItem text="Equipment" url="/equipment" />
    <br />
    <NavBarItem text="Contributing" url="/contributing" />
    <NavBarItem
      text="Github"
      url="https://github.com/hasangergames/suroi-wiki"
    />
    {#if width <= 768}
      <SearchBar />
    {/if}
  </ul>
</nav>

<style>
  .menu-open {
    @apply translate-x-0;
  }
  .menu-closed {
    @apply -translate-x-full;
  }

  @media print {
    nav {
      display: none;
    }
  }
</style>
