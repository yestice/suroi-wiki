<script lang="ts">
  export let columns: string = "2";
</script>

<div
  style="display: grid; grid-template-columns: repeat({columns}, minmax(0, 1fr))" class="divide-x divide-primary border-primary border-t box-border"
>
  <slot />
</div>
