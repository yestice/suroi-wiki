<script lang="ts">
  import type { HealingItemDefinition } from "@suroi/common/src/definitions/healingItems";
  import Section from "./util/Section.svelte";
  import SectionItem from "./util/SectionItem.svelte";
  import SectionImage from "./util/SectionImage.svelte";
  import SectionAudio from "./util/SectionAudio.svelte";

  export let consumable: HealingItemDefinition;
</script>

<Section title={consumable.name}>
  <SectionImage
    img={"../../../vendor/suroi/client/public/img/game/loot/" +
      consumable.idString +
      ".svg"}
    alt={consumable.name + " Sprite"}
  />
  <SectionItem
    name="Heal Type"
    value={consumable.healType == 0
      ? "Health"
      : consumable.healType == 1
      ? "Adrenaline"
      : "Unknown"}
  />
  <SectionItem
    name="Restore Amount"
    value={consumable.restoreAmount.toString()}
  />
  <SectionItem name="ID String" value={consumable.idString} mono={true} />
  <SectionItem
    name="Use Time"
    value={consumable.useTime.toString() + " seconds"}
  />
  <SectionItem
    name="Restore Amount per Second"
    value={(consumable.restoreAmount / consumable.useTime)
      .toFixed(1)
      .toString()}
  />
  <SectionAudio name="Use Sound" sound={"../../../vendor/suroi/client/public/audio/sfx/healing/" + consumable.idString} />
</Section>
