<script lang="ts">
  import { type GunDefinition } from "@suroi/common/src/definitions/guns";
  import Section from "./util/Section.svelte";
  import SectionImage from "./util/SectionImage.svelte";
  import SectionValue from "./util/SectionValue.svelte";
  import SectionAudio from "./util/SectionAudio.svelte";
  import SectionItem from "./util/SectionItem.svelte";
  import SectionGrid from "./util/SectionGrid.svelte";
  import LootIcon from "../icons/LootIcon.svelte";
  import { FireMode } from "@suroi/common/src/constants";
  import BaseSidebar from "./util/BaseSidebar.svelte";

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

<BaseSidebar>
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
      <SectionGrid columns="3">
        <SectionValue name="Ammo Capacity" value={obj.capacity.toString()} />
        <SectionItem>
          <span>Ammo Type:</span>
          <LootIcon id={obj.ammoType} size={30} />
        </SectionItem>
        <SectionValue name="Fire Mode" value={FireMode[obj.fireMode]} />
        {#if obj.fireMode === 1}
          <SectionValue
            name="Shots per Burst"
            value={obj.burstProperties.shotsPerBurst.toString()}
          />
        {/if}
      </SectionGrid>
      {#if obj.infiniteAmmo || obj.killstreak || obj.noMuzzleFlash || obj.shootOnRelease}
        <SectionGrid
          columns={[
            obj.infiniteAmmo,
            obj.killstreak,
            obj.noMuzzleFlash,
            obj.shootOnRelease,
          ]
            .filter(Boolean)
            .length.toString()}
        >
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
        </SectionGrid>
      {/if}
      <SectionGrid columns="2">
        <SectionValue name="Shot Spread" value={obj.shotSpread + "°"} />
        <SectionValue name="Movement Spread" value={obj.moveSpread + obj.shotSpread + "°"} />
      </SectionGrid>
      <SectionGrid columns="1">
        <SectionValue name="Gun ID" value={obj.idString} mono={true} />
      </SectionGrid>
    </Section>
    <Section title="Ballistics">
      <SectionGrid columns="3">
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
      </SectionGrid>
      <SectionGrid columns="3">
        <SectionValue name="Range" value={obj.ballistics.range + " units"} />
        <SectionValue name="DPS" value={dps.toFixed(2)} />
        <SectionValue
          name="Obstacle DPS"
          value={(dps * obj.ballistics.obstacleMultiplier).toFixed(2)}
        />
      </SectionGrid>
    </Section>
    <Section title="Recoil and Weight">
      <SectionGrid columns="3">
        <SectionValue
          name="Speed Multiplier"
          value={obj.speedMultiplier * 100 + "%"}
        />
        <SectionValue
          name="Recoil Multiplier"
          value={obj.recoilMultiplier * 100 + "%"}
        />
        <SectionValue
          name="Recoil Duration"
          value={obj.recoilDuration + "ms"}
        />
      </SectionGrid>
    </Section>
    <Section title="Timing and Delays">
      <SectionGrid columns="2">
        {#if obj.singleReload}
          <SectionValue
            name="Single Reload Time"
            value={obj.reloadTime + "s"}
          />
          <SectionValue
            name="Total Reload Time"
            value={obj.reloadTime * obj.capacity + "s"}
          />
        {:else}
          <SectionValue name="Reload Time" value={obj.reloadTime + "s"} />
        {/if}
      </SectionGrid>
      <SectionGrid columns={obj.fireMode === FireMode.Burst ? "3" : "2"}>
        <SectionValue name="Fire Delay" value={obj.fireDelay + "ms"} />
        <SectionValue name="Switch Delay" value={obj.switchDelay + "ms"} />
        {#if obj.fireMode === FireMode.Burst}
          <SectionValue
            name="Burst Cooldown"
            value={obj.burstProperties.burstCooldown + "ms"}
          />
        {/if}
      </SectionGrid>
    </Section>
    {#if obj.bulletCount}
      <Section title="Shotgun Stats">
        <SectionGrid
          columns={(
            1 +
            [obj.jitterRadius, obj.consistentPatterning].filter(Boolean).length
          ).toString()}
        >
          <SectionValue
            name="Bullet Count"
            value={obj.bulletCount.toString()}
          />
          {#if obj.jitterRadius}
            <SectionValue
              name="Jitter Radius"
              value={obj.jitterRadius + " units"}
            />
          {/if}
          {#if obj.consistentPatterning}
            <SectionItem>Consistent Patterning</SectionItem>
          {/if}
        </SectionGrid>
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
</BaseSidebar>
