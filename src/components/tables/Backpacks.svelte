<script lang="ts">
  import { Backpacks } from "@suroi/common/src/definitions/backpacks";
  import { Loots } from "@suroi/common/src/definitions/loots";
</script>

<table class="table-fixed">
  <thead>
    <tr>
      <th></th>
      {#each Object.entries(Backpacks.definitions[0].maxCapacity) as capacity}
        <th>{Loots.definitions.find(loot => loot.idString === capacity[0])?.name}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each Backpacks.definitions as backpack}
      <tr>
        <td>{backpack.name}</td>
        {#each Object.entries(backpack.maxCapacity) as capacity}
          <td>{capacity[1].toString().replace("Infinity", "∞")}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
