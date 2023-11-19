<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<li class="transition duration-500 hover:text-primary hover:translate-x-1">
  <a href={url}>{text}</a>
</li>