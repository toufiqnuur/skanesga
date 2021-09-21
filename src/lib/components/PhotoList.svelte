<script lang="ts">
  const image = [
    {
      capt: "English Speaking Club",
      src: "/galeri/English-Speaking-Club-150x150.png",
    },
    {
      capt: "Basket",
      src: "/galeri/basket-150x150.png",
    },
    {
      capt: "Hadroh",
      src: "/galeri/Hadroh-150x150.png",
    },
    {
      capt: "Karya Ilmiah Remaja",
      src: "/galeri/Karya-Ilmiah-Remaja-150x150.png",
    },
    {
      capt: "Palang Merah Remaja",
      src: "/galeri/pmr-150x150.png",
    },
  ];
</script>

<div class="flex flex-wrap">
  {#each image as { capt, src }}
    <div class="w-full md:w-1/3 md:px-2 py-2">
      <div class="relative bg-white p-4 rounded-xl shadow-xl">
        <img class="w-full rounded-lg mb-4" {src} loading="lazy" alt={capt} />
        <p class="text-sm text-gray-800">{capt}</p>
      </div>
    </div>
  {/each}
</div>
