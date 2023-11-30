<script lang="ts">
  export let alt: string;
  export let imgs: string[];

  let index = 0;
  $: img = imgs[index];

  function set(num: number) {
    index = num;
  }
</script>

<div class="flex flex-col flex-1 items-center gap-4">
  <img src={img} {alt} width="150" height="150" class="flex-1" />
  <div class="flex justify-around w-full">
    {#each imgs as _, i}
      <button
        class={`text-lg p-2 rounded-md border ${
          i === index ? "border-primary bg-primary" : "hover:text-primary"
        } transition-colors hover:border-primary `}
        on:click={() => set(i)}>{i + 1}</button
      >
    {/each}
  </div>
</div>
