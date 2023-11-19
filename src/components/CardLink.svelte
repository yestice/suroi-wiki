<script lang="ts">
  export let title: string;
  export let url: string;
  export let description: string;
  export let image: string;
</script>

<div class="flex-1">
  <a href={url}>
    <div
      class="flex gap-8 p-4 w-full h-full rounded-md border transition-colors border-border hover:border-blue-500 group"
    >
      <div class="flex justify-center items-center">
        <img
          src={image}
          width={50}
          height={50}
          alt={`${title} page image`}
          class=""
        />
      </div>
      <div class="flex-1">
        <h3
          class="text-lg font-bold leading-loose underline transition-colors group-hover:text-blue-500"
        >
          {title}
        </h3>
        <p class="transition-colors group-hover:text-blue-500">
          {description}
        </p>
      </div>
    </div>
  </a>
</div>
