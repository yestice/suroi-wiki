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

  const fuse = new Fuse(items, options);

  $: results = fuse.search(query);
</script>

j
<div class="flex relative justify-end w-full text-foreground">
  <input
    bind:value={query}
    type="text"
    class="z-10 p-2 w-full rounded-r-md bg-muted"
  />
  <div class="flex flex-col gap-4 text-lg text-foreground bg-background">
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
</div>
<!--

      <div
        className="flex relative justify-end w-full"
      >
        <div className="flex z-10 items-center p-2 rounded-l-md border-l border-y border-border bg-muted">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="z-10 p-2 w-full rounded-r-md bg-muted"
          placeholder="Search..."
        />
        {searchQuery.data && (
          <div className="top-[95%] max-h-[50vh] overflow-y-auto absolute flex flex-col gap-2 p-2 pt-4 w-full rounded-b-md bg-muted border-x border-b border-border">
            {!searchQuery.data.length && (
              <div className="flex justify-center items-center">
                <span>No items found</span>
              </div>
            )}
            {searchQuery.data.map((item) => (
              <div key={item.idString}>
                <Link
                  href={`${item.search.path}/${item.idString}`}
                  onClick={() => setQuery("")}
                >
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
-->
