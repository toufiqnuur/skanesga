<script lang="ts">
  import { page } from "$app/stores";
  let isOpen = false;

  const menu = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Prestasi",
      url: "/prestasi",
    },
    {
      name: "Kompetensi Keahlian",
      url: "/kompetensi-keahlian",
    },
    {
      name: "Ekstrakurikuler",
      url: "/ekstrakurikuler",
    },
  ];
</script>

<nav
  class="bg-white {$page.path === '/'
    ? 'md:bg-transparent gradient md:text-white md:border-0'
    : ''} fixed top-0 z-10 w-full border-b">
  <div
    class="wrapper flex flex-col md:flex-row md:items-center md:justify-between md:relative">
    <div class="flex items-center justify-between py-3">
      <a class="flex items-center text-xl font-bold" href="/">
        <img class="mr-3 w-10 h-10" src="/logo.png" alt="SMK N 1 Seyegan" />
        SMK N 1 Seyegan
      </a>
      <button
        on:click={() => (isOpen = !isOpen)}
        class="md:hidden flex items-center justify-center w-10 h-10"
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            class={isOpen ? "hidden" : "block"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path
            class={isOpen ? "block" : "hidden"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      class:hidden={!isOpen}
      class="md:block w-full md:w-auto absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 border-t border-b md:border-0 px-4 py-3 md:p-0">
      <div
        class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
        {#each menu as { name, url }}
          <a
            on:click={() => (isOpen = false)}
            class:active={$page.path === url}
            sveltekit:prefetch
            href={url}>{name}</a>
        {/each}
      </div>
    </div>
  </div>
</nav>

<style>
  @media (min-width: 768px) {
    .gradient:after {
      content: "";
      width: 100%;
      height: 4rem;
      background: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .active {
    @apply font-bold;
  }
</style>
