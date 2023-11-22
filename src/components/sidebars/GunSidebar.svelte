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

  export let obj: GunDefinition;

  let dps: number;

  if (obj.fireMode === FireMode.Burst) {
    dps =
      (1000 /
        (obj.burstProperties.burstCooldown +
          obj.fireDelay * obj.burstProperties.shotsPerBurst)) *
      (obj.ballistics.damage * obj.burstProperties.shotsPerBurst);
  }
  if (obj.fireMode !== FireMode.Burst) {
    dps =
      obj.ballistics.damage * (obj.bulletCount ?? 1) * (1000 / obj.fireDelay);
  }
</script>

<div class="flex flex-col">
  <Section title={obj.name}>
    <SectionImage
      alt={obj.name + " Image"}
      img={"../../../vendor/suroi/client/public/img/game/weapons/" +
        obj.idString +
        ".svg"}
    />
    <SectionImage
      alt={obj.name + " Image"}
      img={"../../../vendor/suroi/client/public/img/game/weapons/" +
        obj.idString +
        "_world.svg"}
    />
    <SectionRow>
      <SectionValue name="Ammo Capacity" value={obj.capacity.toString()} />
      <SectionItem>
        <span>Ammo Type:</span>
        <LootIcon id={obj.ammoType} size={30} />
      </SectionItem>
    </SectionRow>
    <SectionRow>
      <SectionValue
        name="Fire Mode"
        value={FireMode[obj.fireMode]}
      />
      {#if obj.fireMode === 1}
        <SectionValue
          name="Shots per Burst"
          value={obj.burstProperties.shotsPerBurst.toString()}
        />
      {/if}
    </SectionRow>
    <SectionRow>
      {#if obj.infiniteAmmo}
        <SectionItem>Infinite Ammo</SectionItem>
      {/if}
      {#if obj.killstreak}
        <SectionItem>Killstreaks</SectionItem>
      {/if}
      {#if obj.noMuzzleFlash}
        <SectionItem>No Muzzle Flash</SectionItem>
      {/if}
      {#if obj.shootOnRelease}
        <SectionItem>Shoots on Release</SectionItem>
      {/if}
    </SectionRow>
    <SectionValue name="Gun ID" value={obj.idString} mono={true} />
  </Section>
  <Section title="Ballistics">
    <SectionRow>
      <SectionValue name="Damage" value={obj.ballistics.damage.toString()} />
      <SectionValue
        name="Obstacle Damage"
        value={`${(obj.ballistics.damage * obj.ballistics.obstacleMultiplier)
          .toFixed(1)
          .toString()} (x${obj.ballistics.obstacleMultiplier})`}
      />
      <SectionValue
        name="Bullet Speed"
        value={obj.ballistics.speed.toString()}
      />
    </SectionRow>
    <SectionRow>
      <SectionValue
        name="Maximum Distance"
        value={obj.ballistics.range + " units"}
      />
      <SectionValue name="Max DPS" value={dps.toFixed(2)} />
      <SectionValue
        name="Max Obstacle DPS"
        value={(dps * obj.ballistics.obstacleMultiplier).toFixed(2)}
      />
    </SectionRow>
  </Section>
  <Section title="Recoil and Weight">
    <SectionRow>
      <SectionValue
        name="Speed Multiplier"
        value={obj.speedMultiplier * 100 + "%"}
      />
      <SectionValue
        name="Recoil Multiplier"
        value={obj.recoilMultiplier * 100 + "%"}
      />
      <SectionValue name="Recoil Duration" value={obj.recoilDuration + " ms"} />
    </SectionRow>
  </Section>
  <Section title="Timing and Delays">
    <SectionRow>
      {#if obj.singleReload}
        <SectionValue
          name="Single Reload Time"
          value={obj.reloadTime + " seconds"}
        />
        <SectionValue
          name="Total Reload Time"
          value={obj.reloadTime * obj.capacity + " seconds"}
        />
      {:else}
        <SectionValue name="Reload Time" value={obj.reloadTime + " seconds"} />
      {/if}
    </SectionRow>
    <SectionRow>
      <SectionValue name="Fire Delay" value={obj.fireDelay + " ms"} />
      <SectionValue name="Switch Delay" value={obj.switchDelay + " ms"} />
      {#if obj.fireMode === 1}
        <SectionValue
          name="Burst cooldown"
          value={obj.burstProperties.burstCooldown + " ms"}
        />
      {/if}
    </SectionRow>
  </Section>
  {#if obj.bulletCount}
    <Section title="Shotgun Stats">
      <SectionRow>
        <SectionValue name="Bullet Count" value={obj.bulletCount.toString()} />
        {#if obj.jitterRadius}
          <SectionValue
            name="Jitter Radius"
            value={obj.jitterRadius + " units"}
          />
        {/if}
        {#if obj.consistentPatterning}
          <SectionItem>Consistent Patterning</SectionItem>
        {/if}
      </SectionRow>
    </Section>
  {/if}
  <Section title="Sound">
    <SectionAudio
      name="Fire"
      sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" +
        obj.idString +
        "_fire.mp3"}
    />
    <SectionAudio
      name="Switch"
      sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" +
        obj.idString +
        "_switch.mp3"}
    />
    <SectionAudio
      name="Reload"
      sound={"../../../vendor/suroi/client/public/audio/sfx/weapons/" +
        obj.idString +
        "_reload.mp3"}
    />
  </Section>
</div>
