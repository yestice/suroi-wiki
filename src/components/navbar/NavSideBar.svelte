<script lang="ts">
  import NavBarItem from "./NavBarItem.svelte";
</script>

<div
  class="md:flex print:!hidden hidden sticky top-0 left-0 bg-muted p-4 m-4 rounded-2xl text-lg text-foreground"
>
  <ul class="flex flex-col gap-4 p-4">
    <li class="mb-4">
      <a href="/">
        <img src="/img/logo.svg" width="150" alt="Suroi Official Wiki logo" />
      </a>
    </li>
    <NavBarItem text="Home" url="/" />
    <NavBarItem text="Weapons" url="/weapons" />
    <NavBarItem text="Consumables" url="/consumables" />
    <NavBarItem text="Obstacles" url="/obstacles" unavailable={true} />
    <NavBarItem text="Buildings" url="/buildings" unavailable={true} />
    <NavBarItem text="Skins" url="/skins" unavailable={true} />
    <NavBarItem text="Equipment" url="/equipment" unavailable={true} />
    <br />
    <NavBarItem text="Contributing" url="/contributing" />
    <NavBarItem
      text="Github"
      url="https://github.com/hasangergames/suroi-wiki"
    />
  </ul>
</div>
