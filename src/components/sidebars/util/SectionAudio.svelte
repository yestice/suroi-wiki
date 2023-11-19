<script lang="ts">
  import SectionItem from "./SectionItem.svelte";

  export let name: string;
  export let sound: string;
</script>

<SectionItem>
  <span>{name + ":"}</span>
  <audio controls>
    <source src={sound} type="audio/mpeg">
    Your browser does not support audio.
  </audio>
</SectionItem>