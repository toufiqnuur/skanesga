<script context="module">
  export const prerender = true;
  export async function load({ fetch }) {
    const post = await (await fetch("/api/post.json")).json();
    return { props: { post } };
  }
</script>

<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import About from "$lib/components/home/About.svelte";
  import ShortInfo from "$lib/components/home/ShortInfo.svelte";
  import VisiMisi from "$lib/components/home/VisiMisi.svelte";
  import Jurusan from "$lib/components/home/Jurusan.svelte";
  import BeritaInformasi from "$lib/components/home/BeritaInformasi.svelte";
  import Gallery from "$lib/components/home/Gallery.svelte";

  export let post: Array<any>;
</script>

<Hero />
<About />
<ShortInfo />
<VisiMisi />
<Jurusan />
<BeritaInformasi {post} />
<Gallery />
