<script lang="ts">
  import SectionItem from "./SectionItem.svelte";

  export let img: string;
  export let alt: string;
</script>

<SectionItem>
  <img class="mx-auto my-4" src={img} {alt} width="150" height="150" />
</SectionItem>