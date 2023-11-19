<script lang="ts">
  export let img: string;
  export let alt: string;
</script>

<div class="flex p-16 border-primary border-2">
  <img class="mx-auto" src={img} alt={alt} width=200 height=200 />
</div>