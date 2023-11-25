<script lang="ts">
  import SectionItem from "./SectionItem.svelte";

  export let name: string;
  export let sound: string;
</script>

<SectionItem>
  <div class="flex items-center justify-between flex-1">
    <div class="">
      <span>{name + ":"}</span>
    </div>
    <div class="">
      <audio preload="metadata" controls class="w-min">
        <source src={sound} type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </div>
  </div>
</SectionItem>
