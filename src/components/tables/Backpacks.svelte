<script lang="ts">
  import { Backpacks } from "@suroi/common/src/definitions/backpacks";
</script>

<table class="table-fixed">
  <thead>
    <tr>
      <th></th>
      {#each Object.entries(Backpacks.definitions[0].maxCapacity) as capacity}
        <th>{capacity[0]}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each Backpacks.definitions as backpack}
      <tr>
        <td>{backpack.name}</td>
        {#each Object.entries(backpack.maxCapacity) as capacity}
          <td>{capacity[1]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
