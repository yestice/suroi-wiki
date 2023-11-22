<script lang="ts">
  import type { HealingItemDefinition } from "@suroi/common/src/definitions/healingItems";
  import Section from "./util/Section.svelte";
  import SectionValue from "./util/SectionValue.svelte";
  import SectionImage from "./util/SectionImage.svelte";
  import SectionAudio from "./util/SectionAudio.svelte";

  export let obj: HealingItemDefinition;
</script>

<Section title={obj.name}>
  <SectionImage
    img={"../../../vendor/suroi/client/public/img/game/loot/" +
      obj.idString +
      ".svg"}
    alt={obj.name + " Sprite"}
  />
  <SectionValue
    name="Heal Type"
    value={obj.healType == 0
      ? "Health"
      : obj.healType == 1
      ? "Adrenaline"
      : "Unknown"}
  />
  <SectionValue
    name="Restore Amount"
    value={obj.restoreAmount.toString()}
  />
  <SectionValue name="ID String" value={obj.idString} mono={true} />
  <SectionValue
    name="Use Time"
    value={obj.useTime.toString() + " seconds"}
  />
  <SectionValue
    name="Restore Amount per Second"
    value={(obj.restoreAmount / obj.useTime)
      .toFixed(1)
      .toString()}
  />
  <SectionAudio name="Use Sound" sound={"../../../vendor/suroi/client/public/audio/sfx/healing/" + obj.idString + ".mp3"} />
</Section>
