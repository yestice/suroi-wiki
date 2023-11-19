<script lang="ts">
  export let id: string;
  export let size: number = 50;
</script>

<img
  src={"../../../vendor/suroi/client/public/img/game/loot/" + id + ".svg"}
  alt={id + " icon"}
  width={size}
  height={size}
/>