<script lang="ts">
  import "../style.css";
  import Navbar from "$lib/partials/Navbar.svelte";
  import Footer from "$lib/partials/Footer.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
    rel="stylesheet" />
</svelte:head>

<Navbar />
<main class="mt-16">
  <slot />
</main>
<Footer />
