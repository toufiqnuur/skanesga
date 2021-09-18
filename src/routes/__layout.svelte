<script lang="ts">
  import "../style.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/partials/Footer.svelte";
</script>

<Navbar />
<main class="mt-16">
  <slot />
</main>
<Footer />
