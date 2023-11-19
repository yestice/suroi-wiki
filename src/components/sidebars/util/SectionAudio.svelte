<script lang="ts">
  export let name: string;
  export let sound: string;
</script>

<div class="flex flex-col sm:flex-row gap-4 p-4 border-primary border-2">
  <span>{name + ":"}</span>
  <audio controls>
    <source src={sound + ".mp3"} type="audio/mpeg">
    Your browser does not support audio.
  </audio>
</div>