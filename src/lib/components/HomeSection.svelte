<script lang="ts">
  export let background: string, padding: string;
</script>

<div class={background}>
  <div class={`container py-8 ${padding ?? "md:py-24"}`}>
    <slot />
  </div>
</div>
