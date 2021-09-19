<script lang="ts">
  import { isOpen } from "../../store";
</script>

<button
  on:click={isOpen.set(!$isOpen)}
  class="md:hidden flex items-center justify-center w-10 h-10"
  type="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      class:hidden={$isOpen}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16" />
    <path
      class:hidden={!$isOpen}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
