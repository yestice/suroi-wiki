<script lang="ts">
  import type { MeleeDefinition } from "@suroi/common/src/definitions/melees";
  import BaseSidebar from "./util/BaseSidebar.svelte";
  import Section from "./util/Section.svelte";
  import SectionImage from "./util/SectionImage.svelte";
  import SectionValue from "./util/SectionValue.svelte";
  import SectionGrid from "./util/SectionGrid.svelte";

  export let obj: MeleeDefinition;

  const dps: number = obj.damage * (1000 / obj.cooldown);
</script>

<BaseSidebar>
  <div class="flex flex-col">
    <Section title={obj.name}>
      <SectionImage
        img={"../../../vendor/suroi/client/public/img/game/weapons/" +
          obj.idString +
          ".svg"}
        alt={obj.name + " Image"}
      />
      <SectionValue name="ID" value={obj.idString} mono={true} />
      <SectionGrid columns={3}>
        <SectionValue name="Damage" value={obj.damage.toString()} />
        <SectionValue
          name="Obstacle Multiplier"
          value={obj.obstacleMultiplier * 100 + "%"}
        />
        <SectionValue name="Cooldown" value={obj.cooldown + " ms"} />
      </SectionGrid>
      <SectionGrid columns={2}>
        <SectionValue name="DPS" value={dps.toFixed(2)} />
        <SectionValue
          name="Obstacle DPS"
          value={(dps * obj.obstacleMultiplier).toFixed(2)}
        />
      </SectionGrid>
    </Section>
  </div>
</BaseSidebar>
