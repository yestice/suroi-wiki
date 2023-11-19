<script lang="ts">
  export let title: string;
</script>

<div class="flex flex-col border-primary border-2 not-prose">
  <span class="text-base font-bold bg-primary text-foreground p-2">{title}</span>
  <slot />
</div>
