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
