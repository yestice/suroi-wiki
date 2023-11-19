<script lang="ts">
  export let name: string;
  export let value: string;
  export let mono: boolean = false;
</script>

<div class="flex flex-col sm:flex-row gap-4 p-4 border-primary border-2">
  <span>{name + ":"}</span>
  <span class={mono ? "font-mono bg-muted px-2" : "font-sans"}>{value}</span>
</div>
