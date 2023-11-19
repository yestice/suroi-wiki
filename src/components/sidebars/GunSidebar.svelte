<script lang="ts">
  import { type GunDefinition } from "@suroi/common/src/definitions/guns";
  import Section from "./util/Section.svelte";
  import SectionImage from "./util/SectionImage.svelte";
  import SectionValue from "./util/SectionValue.svelte";
  import SectionAudio from "./util/SectionAudio.svelte";
  import SectionItem from "./util/SectionItem.svelte";
  import SectionRow from "./util/SectionRow.svelte";
  import LootIcon from "../icons/LootIcon.svelte";
  import { FireMode } from "@suroi/common/src/constants";

  export let gun: GunDefinition;

  let dps: number;

  if (gun.fireMode === FireMode.Burst) {
    dps =
      (1000 /
        (gun.burstProperties.burstCooldown +
          gun.fireDelay * gun.burstProperties.shotsPerBurst)) *
      (gun.ballistics.damage * gun.burstProperties.shotsPerBurst);
  }
  if (gun.fireMode !== FireMode.Burst) {
    dps =
      gun.ballistics.damage * (gun.bulletCount ?? 1) * (1000 / gun.fireDelay);
  }
</script>

<div class="flex flex-col ml-auto">
  <Section title={gun.name}>
    <SectionImage
      alt={gun.name + " Image"}
      img={"../../../vendor/suroi/client/public/img/game/weapons/" +
        gun.idString +
        ".svg"}
    />
    <SectionImage
      alt={gun.name + " Image"}
      img={"../../../vendor/suroi/client/public/img/game/weapons/" +
        gun.idString +
        "_world.svg"}
    />
    <SectionRow>
      <SectionValue name="Ammo Capacity" value={gun.capacity.toString()} />
      <SectionItem>
        <span>Ammo Type:</span>
        <LootIcon id={gun.ammoType} size={30} />
      </SectionItem>
    </SectionRow>
    <SectionRow>
      <SectionValue
        name="Fire Mode"
        value={gun.fireMode === 0
          ? "Single"
          : gun.fireMode === 1
          ? "Burst"
          : gun.fireMode === 2
          ? "Auto"
          : "Unknown"}
      />
      {#if gun.fireMode === 1}
        <SectionValue
          name="Shots per Burst"
          value={gun.burstProperties.shotsPerBurst.toString()}
        />
      {/if}
    </SectionRow>
    <SectionRow>
      {#if gun.infiniteAmmo}
        <SectionItem>Infinite Ammo</SectionItem>
      {/if}
      {#if gun.killstreak}
        <SectionItem>Killstreaks</SectionItem>
      {/if}
      {#if gun.noMuzzleFlash}
        <SectionItem>No Muzzle Flash</SectionItem>
      {/if}
      {#if gun.shootOnRelease}
        <SectionItem>Shoots on Release</SectionItem>
      {/if}
    </SectionRow>
    <SectionValue name="Gun ID" value={gun.idString} mono={true} />
  </Section>
  <Section title="Ballistics">
    <SectionRow>
      <SectionValue name="Damage" value={gun.ballistics.damage.toString()} />
      <SectionValue
        name="Obstacle Damage"
        value={(gun.ballistics.damage * gun.ballistics.obstacleMultiplier)
          .toFixed(1)
          .toString()}
      />
      <SectionValue
        name="Bullet Speed"
        value={gun.ballistics.speed.toString()}
      />
    </SectionRow>
    <SectionRow>
      <SectionValue
        name="Maximum Distance"
        value={gun.ballistics.maxDistance + " units"}
      />
      <SectionValue name="Max DPS" value={dps.toFixed(2)} />
      <SectionValue
        name="Max Obstacle DPS"
        value={(dps * gun.ballistics.obstacleMultiplier).toFixed(2)}
      />
    </SectionRow>
  </Section>
  <Section title="Recoil and Weight">
    <SectionRow>
      <SectionValue
        name="Speed Multiplier"
        value={gun.speedMultiplier * 100 + "%"}
      />
      <SectionValue
        name="Recoil Multiplier"
        value={gun.recoilMultiplier * 100 + "%"}
      />
      <SectionValue name="Recoil Duration" value={gun.recoilDuration + " ms"} />
    </SectionRow>
  </Section>
  <Section title="Timing and Delays">
    <SectionRow>
      {#if gun.singleReload}
        <SectionValue
          name="Single Reload Time"
          value={gun.reloadTime + " seconds"}
        />
        <SectionValue
          name="Total Reload Time"
          value={gun.reloadTime * gun.capacity + " seconds"}
        />
      {:else}
        <SectionValue name="Reload Time" value={gun.reloadTime + " seconds"} />
      {/if}
    </SectionRow>
    <SectionRow>
      <SectionValue name="Fire Delay" value={gun.fireDelay + " ms"} />
      <SectionValue name="Switch Delay" value={gun.switchDelay + " ms"} />
      {#if gun.fireMode === 1}
        <SectionValue
          name="Burst cooldown"
          value={gun.burstProperties.burstCooldown + " ms"}
        />
      {/if}
    </SectionRow>
  </Section>
  {#if gun.bulletCount}
    <Section title="Shotgun Stats">
      <SectionRow>
        <SectionValue name="Bullet Count" value={gun.bulletCount.toString()} />
        {#if gun.jitterRadius}
          <SectionValue
            name="Jitter Radius"
            value={gun.jitterRadius + " units"}
          />
        {/if}
        {#if gun.consistentPatterning}
          <SectionItem>Consistent Patterning</SectionItem>
        {/if}
      </SectionRow>
    </Section>
  {/if}
  <Section title="sound">
    <SectionAudio name="Fire" sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" + gun.idString + "_fire.mp3"} />
    <SectionAudio name="Switch" sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" + gun.idString + "_switch.mp3"} />
    <SectionAudio name="Reload" sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" + gun.idString + "_reload.mp3"} />
  </Section>
</div>
