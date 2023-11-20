<script lang="ts">
  import Emote from "../icons/Emote.svelte";

  export let text: string;
  export let emoteID: string;
</script>

<div class="flex gap-4 items-center p-2 pl-4 bg-muted not-prose">
  <div class="flex items-center">
    <Emote id={emoteID} />
  </div>
  <div class="flex flex-1 justify-center">
    <span class="font-bold">
      {text}
    </span>
  </div>
</div>