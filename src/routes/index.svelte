<script context="module">
  export const prerender = true;
  export async function load({ fetch }) {
    const post = await (await fetch("/api/post.json")).json();
    return { props: { post } };
  }
</script>

<script lang="ts">
  import HomeSection from "$lib/components/HomeSection.svelte";
  import ShortInfo from "$lib/components/ShortInfo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import PostList from "$lib/components/PostList.svelte";
  import PhotoList from "$lib/components/PhotoList.svelte";

  export let post: Array<any>;
</script>

<Hero>
  <h1 class="font-bold text-4xl mb-3">SMK N 1 Seyegan</h1>
  <p>Mutu Unggul Prima dalam Karya</p>
</Hero>

<HomeSection background="bg-gray-100 pattern">
  <div class="box-content-2 md:space-x-8 xl:space-x-16">
    <div class="content-item-2 highlight -bottom-4 -right-4 mb-4">
      <iframe
        title="Profile SMK N 1 Seyegan"
        loading="lazy"
        class="w-full ratio-16/9 absolute -top-4 -left-4 shadow-xl rounded-xl"
        src="https://youtube.com/embed/XdeM2zhzGdg" />
    </div>
    <div class="content-item-2 pb-3 md:pb-0">
      <h3 class="text-header">SMK N 1 Seyegan</h3>
      <p class="font-light text-lg leading-7 mb-8">
        Pada tahun 1973, STM Sleman mulai menerima siswa baru mulai kelas 1
        (sekarang kelas X). Pada saat itu, hanya ada Jurusan Bangunan yang
        menerima 2 rombongan belajar, dan Jurusan Teknik Mesin yang juga
        menerima 2 rombongan belajar.
      </p>
      <a class="btn-primary" href="/profile">Selengkapnya</a>
    </div>
  </div>
</HomeSection>

<HomeSection padding="py-8">
  <div
    class="md:grid md:grid-flow-col space-y-8 md:space-y-0 md:divide-x-2 md:divide-gray-300 md:divide-solid">
    {#each [["Jurusan", 7], ["Ruang Kelas", 44], ["Peserta Didik", 1570], ["Guru", 95]] as item}
      <ShortInfo title={item[1]} caption={item[0]} />
    {/each}
  </div>
</HomeSection>

<HomeSection background="bg-gray-100 pattern">
  <div class="content-item-2 text-center mx-auto">
    <h3 class="text-header">Visi & Misi</h3>
    <p class="text-lg leading-7 font-light">
      Mewujudkan sekolah yang religius, berbudaya lokal dan industri untuk
      menghasilkan tamatan yang berkarakter, berakhlak mulia serta unggul dalam
      bekerja maupun berwira usaha.
    </p>
  </div>
</HomeSection>

<HomeSection background="bg-white">
  <div class="box-content-2">
    <div class="content-item-2 highlight -top-4 -left-4 md:order-2">
      <Slider />
    </div>
    <div class="content-item-2 pb-3 md:mr-8 md:order-1">
      <h3 class="text-header">Beragam Pilihan Kompetensi Keahlian</h3>
      <p class="text-lg leading-7 font-light mb-8">
        Calon peserta didik diberi banyak pilihan kometensi keahlian sehingga
        mereka dapat memilih yang sesuai dengan minat dan bakatnya. SMK Negeri 1
        Seyegan memiliki jumlah total 7 kompetensi keahlian.
      </p>
      <a class="btn-primary" href="/kompetensi-keahlian">Selengkapnya</a>
    </div>
  </div>
</HomeSection>

<HomeSection background="bg-gray-100 pattern">
  <h3 class="text-header text-center">Berita & Informasi</h3>
  <PostList {post} />
  <div class="mt-8 text-center">
    <a class="btn-primary" href="/">Berita lainnya</a>
  </div>
</HomeSection>

<HomeSection background="bg-white">
  <h3 class="text-header text-center">Gallery</h3>
  <PhotoList />
</HomeSection>
