<script lang="ts">
  import { ArmorType, Armors } from "@suroi/common/src/definitions/armors";

  let Helmets: any[] = [
    {
      name: "None",
      damageReduction: 0,
    },
  ];

  for (const armor of Armors) {
    if (armor.armorType === ArmorType.Helmet) {
      Helmets.push(armor);
    }
  }

  let Vests: any[] = [
    {
      name: "None",
      damageReduction: 0,
    },
  ];
  for (const armor of Armors) {
    if (armor.armorType === ArmorType.Vest) {
      Vests.push(armor);
    }
  }
</script>

<table class="table-fixed w-full divide-y overflow-auto">
  <thead>
    <tr>
      <th></th>
      {#each Helmets as helmet}
        <th>
          <img
            src="../../../vendor/suroi/client/public/img/game/loot/{helmet.idString}.svg"
            alt={helmet.name}
            class="h-8 w-8"
          />
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each Vests as vest}
      <tr>
        <th>
          <img
            src="../../../vendor/suroi/client/public/img/game/loot/{vest.idString}.svg"
            alt={vest.name}
            class="h-8 w-8"
          />
        </th>
        {#each Helmets as helmet}
          <td>
            DR: {(
              (vest.damageReduction + helmet.damageReduction) *
              100
            ).toFixed(0)}%
            <br />
            EHP: {(
              100 /
              (1 - helmet.damageReduction - vest.damageReduction)
            ).toFixed(2)}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
