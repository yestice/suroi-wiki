<script lang="ts">
  import Fuse from "fuse.js";
  import { Guns } from "@suroi/common/src/definitions/guns.ts";
  import { HealingItems } from "@suroi/common/src/definitions/healingItems";
  import Icon from "@iconify/svelte";
  import { LootTables, LootTiers } from "@suroi/server/src/data/lootTables";

  const options = {
    keys: ["name"],
  };

  let query: string = "";

  $: query = query.replace("/", "").replace(".", "");

  let items = [];

  for (const gun of Guns) {
    items.push({
      name: gun.name,
      url: "/weapons/guns/" + gun.idString,
      image:
        "../../vendor/suroi/client/public/img/game/weapons/" +
        gun.idString +
        ".svg",
    });
  }

  for (const consumable of HealingItems) {
    items.push({
      name: consumable.name,
      url: "/consumables/" + consumable.idString,
      image:
        "../../vendor/suroi/client/public/img/game/loot/" +
        consumable.idString +
        ".svg",
    });
  }

  for (const tier of Object.entries(LootTiers)) {
    items.push({
      name: "Loot Tier " + tier[0],
      url: "/loot/#" + tier[0],
    });
  }

  for (const tier of Object.entries(LootTables)) {
    items.push({
      name: "Loot Table " + tier[0],
      url: "/loot/#" + tier[0],
    });
  }

  function enterFirst(event: { key: string }) {
    if (event.key == "Enter" && results.length != 0) {
      window.location.href = results[0].item.url;
      clearQuery();
    }
    if (event.key == "/") {
      document.getElementById("search")?.focus();
    }
  }

  function clearQuery() {
    query = "";
  }

  const fuse = new Fuse(items, options);

  // Limit amount of results
  $: results = fuse.search(query).slice(0, 3);
</script>

<svelte:window on:keydown={enterFirst} />

<div class="flex relative justify-end w-full">
  <div
    class="flex z-10 items-center p-2 rounded-l-md border-l border-y border-border bg-muted"
  >
    <Icon icon="lucide:search" class="h-6 w-6 mr-auto my-auto" />
  </div>
  <input
    bind:value={query}
    type="text"
    class="z-10 p-2 w-full bg-muted"
    placeholder="Search..."
    id="search"
  />
  <div
    class="flex z-10 items-center p-2 rounded-r-md border-r border-y border-border bg-muted"
  >
    <Icon icon="lucide:square-slash" class="h-6 w-6 mr-auto my-auto" />
  </div>
  {#if results.length != 0}
    <div
      class="bottom-[95%] md:top-[95%] border-b-0 md:bottom-auto max-h-[50vh] overflow-y-auto absolute flex flex-col gap-2 p-2 pt-4 w-full rounded-md bg-muted border md:border-t-0 md:border-b border-border"
    >
      {#each results as result}
        <a
          href={result.item.url}
          class="p-2 rounded-md hover:bg-neutral-600/80 cursor-pointer flex gap-2 transition-colors"
          on:click={clearQuery}
        >
          <div class="p-1">
            {#if result.item.image}
              <img
                src={result.item.image}
                alt={`Image of ${result.item.name}`}
                class="h-8 w-8"
              />
            {:else}
              <Icon icon="lucide:text" class="h-8 w-8" />
            {/if}
          </div>
          <div>
            <h3 class="p-2 font-bold">{result.item.name}</h3>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>
