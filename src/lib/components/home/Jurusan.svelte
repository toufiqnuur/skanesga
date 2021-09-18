<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, { Autoplay } from "swiper";
  import "swiper/css";

  const dataSlide = [
    ["Konstruksi Gedung Sanitasi dan Perawatan", "/jurusan/kgsp.jpg"],
    ["Desain Pemodelan dan Informasi Bangunan", "/jurusan/dpib.jpg"],
    ["Teknik Fabrikasi  Logam dan Manufaktur", "/jurusan/tflm.jpg"],
    ["Teknik Kendaraan Ringan Otomotif", "/jurusan/tkro.jpg"],
    ["Teknik Ototronik", "/jurusan/to.jpg"],
    ["Teknik dan Bisnis Sepeda Motor", "/jurusan/tbsm.jpg"],
    ["Teknik Komputer dan Jaringan", "/jurusan/tkj.jpg"],
  ];

  SwiperCore.use([Autoplay]);
</script>

<div class="wrapper py-8 xl:py-24">
  <div
    class="flex items-center flex-col md:flex-row space-y-8 md:space-y-0 mt-4">
    <div
      class="relative -top-4 -left-4 w-full md:w-1/2 ratio-16/9 border-4 rounded-xl border-green-300 md:order-2">
      <Swiper
        class="absolute w-full top-4 left-4 rounded-xl"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}>
        {#each dataSlide as data}
          <SwiperSlide>
            <img
              class="ratio-16/9 object-cover shadow-xl w-full"
              loading="lazy"
              src={data[1]}
              alt={data[0]} />
            <span
              class="absolute px-2 text-sm rounded-tl bg-green-300 bottom-0 right-0"
              >{data[0]}</span>
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
    <div class="w-full md:w-1/2 pb-3 md:mr-8 md:order-1">
      <h3 class="text-3xl font-black mb-3">
        Beragam Pilihan Kompetensi Keahlian
      </h3>
      <p class="text-lg leading-7 font-light mb-8">
        Calon peserta didik diberi banyak pilihan kometensi keahlian sehingga
        mereka dapat memilih yang sesuai dengan minat dan bakatnya. SMK Negeri 1
        Seyegan memiliki jumlah total 7 kompetensi keahlian.
      </p>
      <a
        class="text-white bg-green-500 focus:bg-green-300 shadow-xl rounded py-3 px-5"
        href="/kompetensi-keahlian">Selengkapnya</a>
    </div>
  </div>
</div>

<style>
  .ratio-16\/9 {
    aspect-ratio: 16/9;
  }
</style>
