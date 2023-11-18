<script lang="ts">
  import type Fuse from "fuse.js";
  import type { Searchable } from "astro-fuse";
  //import Icon from "astro-icon";

  const inp = document.querySelector<HTMLInputElement>("[data-search-inp]");
  const ul = document.querySelector("[data-search-result]");

  let inst: Fuse<Searchable>;

  function load() {
    // for prevent duplicated requests
    if (!inst) {
      return loadFuse().then((_inst) => {
        inst = _inst;
        return inst;
      });
    }

    return Promise.resolve(inst);
  }

  inp?.addEventListener("input", () => {
    load()
      .then((fuse) => fuse.search(inp?.value))
      .then((results) => {
        if (!ul) {
          return;
        }

        // you can manipulate fileUrl to make link URL
        ul.innerHTML = results.map(({ item }) => `<li>${item}</li>`).join("");
      });
  });
</script>

<div
  class="flex flex-row form-input rounded-3xl text-foreground bg-background border-border"
>
  <!--<Icon name="lucide:search" />-->
  <input class="bg-background active:border-none w-full" type="text" data-search-inp />
  <ul data-search-result />
</div>
