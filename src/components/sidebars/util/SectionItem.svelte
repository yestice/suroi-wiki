<script lang="ts">
  export let bottomBorder: boolean = false;
</script>

<div class={`${bottomBorder && "border-b border-primary"} flex flex-col grow text-xs sm:flex-row gap-2 p-2 items-center`}>
  <slot />
</div>
