<script lang="ts">
  import ButtonToggle from "$lib/components/ButtonToggle.svelte";
  import { isOpen } from "../../store";
  import { page } from "$app/stores";

  let scrollY = 0;
  $: isHome = $page.path === "/";

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

<svelte:window bind:scrollY />

<nav
  class:nav-default={!isHome || $isOpen || scrollY > 1}
  class:nav-gradient={isHome && scrollY < 1 && !$isOpen}>
  <div class="container flex items-center justify-between py-3">
    <div
      class:text-white={isHome && !$isOpen && scrollY < 1}
      class="flex flex-1 justify-between">
      <a
        on:click={() => isOpen.set(false)}
        class="flex items-center text-xl font-bold"
        href="/">
        <img
          class="mr-3 w-10 h-10"
          src="/logo.png"
          alt="SMK N 1 Seyegan"
          loading="lazy" />
        SMK N 1 Seyegan
      </a>
      <ButtonToggle />
    </div>
    <div
      class:hidden={!$isOpen}
      class="md:block w-full md:w-auto absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 border-t border-b md:border-0 px-8 py-4 md:p-0">
      <div
        class:md:text-white={isHome && scrollY < 1}
        class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
        {#each menu as { name, url }}
          <a
            on:click={() => isOpen.set(false)}
            class:font-bold={$page.path === url}
            class="focus:text-green-500"
            sveltekit:prefetch
            href={url}>{name}</a>
        {/each}
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    @apply w-full fixed top-0 z-10;
  }
  .nav-default {
    @apply bg-white border-b;
  }
  .nav-gradient {
    background: linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
  }
</style>
