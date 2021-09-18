<script lang="ts">
  export let title: string;
</script>

<div class="w-full md:text-left md:w-1/3">
  {#if title === "SMK N 1 Seyegan"}
    <img class="w-32 h-32 mb-8" src="/logo.png" loading="lazy" alt="Logo" />
  {/if}
  <h5 class="text-green-300 text-2xl font-bold mb-8 md:mb-4">
    {title}
  </h5>
  <slot />
</div>
