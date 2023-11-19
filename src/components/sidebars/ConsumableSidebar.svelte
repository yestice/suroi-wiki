<script lang="ts">
  import type { HealingItemDefinition } from "@suroi/common/src/definitions/healingItems";
  import Section from "./util/Section.svelte";
  import SectionValue from "./util/SectionValue.svelte";
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
  <SectionValue
    name="Heal Type"
    value={consumable.healType == 0
      ? "Health"
      : consumable.healType == 1
      ? "Adrenaline"
      : "Unknown"}
  />
  <SectionValue
    name="Restore Amount"
    value={consumable.restoreAmount.toString()}
  />
  <SectionValue name="ID String" value={consumable.idString} mono={true} />
  <SectionValue
    name="Use Time"
    value={consumable.useTime.toString() + " seconds"}
  />
  <SectionValue
    name="Restore Amount per Second"
    value={(consumable.restoreAmount / consumable.useTime)
      .toFixed(1)
      .toString()}
  />
  <SectionAudio name="Use Sound" sound={"../../../vendor/suroi/client/public/audio/sfx/healing/" + consumable.idString + ".mp3"} />
</Section>
