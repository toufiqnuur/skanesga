<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  export let name: string, label: string, url: string;
</script>

<div class="flex items-center space-x-4">
  <div class="flex-shrink bg-gray-800 rounded-xl p-3">
    <Icon type={name} color="text-green-500" size="6" />
  </div>
  <div class="flex flex-col items-start">
    <p class="text-sm text-green-500 font-semibold capitalize">{name}</p>
    <a class="text-gray-300" href={url}>{label}</a>
  </div>
</div>
