<script lang="ts">
  export let text: string;
  export let url: string;
  export let unavailable: boolean = false;
</script>

{#if unavailable}
  <li class="text-foreground/50 cursor-not-allowed select-none">
    {text}
  </li>
{:else}
  <li class="transition duration-500 hover:text-primary hover:translate-x-1">
    <a href={url}>{text}</a>
  </li>
{/if}
