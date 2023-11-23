<script lang="ts">
  import Fuse from "fuse.js";
  import { Guns } from "@suroi/common/src/definitions/guns.ts";
  import { HealingItems } from "@suroi/common/src/definitions/healingItems";
  import icon from "astro-icon";

  const options = {
    keys: ["name"],
  };

  let query: string = "";

  let items = [];

  for (const gun of Guns) {
    items.push({
      name: gun.name,
      url: "/weapons/guns/" + gun.idString,
      image: "@suroi/client/public/img/game/weapons/" + gun.idString + ".svg",
    });
  }

  for (const consumable of HealingItems) {
    items.push({
      name: consumable.name,
      url: "/consumables/" + consumable.idString,
      image:
        "@suroi/client/public/img/game/loot/" + consumable.idString + ".svg",
    });
  }

  const fuse = new Fuse(items, options);

  $: results = fuse.search(query);
</script>

<div class="">
  <input
    bind:value={query}
    type="text"
    class="p-2 w-full rounded-r-md bg-muted"
  />
  {#each results as result}
    <a class="flex flex-row gap-4 p-4" href={result.item.url}>
      <div
        class="p-2 rounded-md hover:bg-neutral-600/80 cursor-pointer flex gap-2 transition-colors"
      >
        <div class="p-1">
          <img
            src={result.item.image}
            alt={`Image of ${result.item.name}`}
            height={100}
            width={100}
          />
        </div>
        <div>
          <h3 class="p-2 font-bold">{result.item.name}</h3>
        </div>
      </div>
    </a>
  {/each}
</div>