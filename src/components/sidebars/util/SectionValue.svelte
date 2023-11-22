<script lang="ts">
  import SectionItem from "./SectionItem.svelte";

  export let name: string;
  export let value: string;
  export let mono: boolean = false;
</script>

<SectionItem>
  <span>
    {name + ":"}
    <span class={mono ? "font-mono bg-muted px-2" : "font-sans"}>{value}</span>
  </span>
</SectionItem>
