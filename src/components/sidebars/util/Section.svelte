<script lang="ts">
  export let title: string;
</script>

<div class="flex flex-col not-prose box-border border-2 border-primary">
  <span class="text-base font-bold bg-primary text-foreground p-2">{title}</span>
  <slot />
</div>
