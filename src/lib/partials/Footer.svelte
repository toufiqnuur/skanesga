<script lang="ts">
  import KontakItem from "$lib/components/KontakItem.svelte";
  import FooterSection from "$lib/components/FooterSection.svelte";

  const kontak = [
    {
      name: "email",
      label: "smkn1seyegan@gmail.com",
      url: "mailto:smkn1seyegan@gmail.com",
    },
    {
      name: "phone",
      label: "0274 866442",
      url: "/",
    },
    {
      name: "instagram",
      label: "smkn1seyeganofficial",
      url: "https://www.instagram.com/smkn1seyeganofficial/",
    },
    {
      name: "youtube",
      label: "SMK N 1 Seyegan",
      url: "https://www.youtube.com/channel/UCuW3605R7_3LNVMpkVxEsgA",
    },
  ];
</script>

<footer class="bg-gray-700 text-white border-t-4 border-green-300">
  <div class="wrapper py-8 xl:py-16">
    <div class="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-8">
      <FooterSection title="SMK N 1 Seyegan">
        <p class="text-gray-300 font-light">
          SMKN 1 Seyegan merupakan sekolah menengah kejuruan dengan akreditasi
          A.
        </p>
      </FooterSection>

      <FooterSection title="Lokasi">
        <iframe
          title="SMK N 1 Seyegan"
          loading="lazy"
          class="w-full mb-2 border-4 border-white shadow-xl ratio-3/2 rounded-xl"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SMK%20N%201%20Seyegan+(SMK%20N%201%20Seyegan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        <p class="text-gray-300 text-xs font-light">
          Jl. Kebonagung KM 8, Jamblangan, Margomulyo, Seyegan, Sleman, Daerah
          Istimewa Yogyakarta, 55561
        </p>
      </FooterSection>

      <FooterSection title="Kontak">
        <div class="flex flex-col space-y-4">
          {#each kontak as { name, label, url }}
            <KontakItem {name} {label} {url} />
          {/each}
        </div>
      </FooterSection>
    </div>
  </div>
</footer>

<style>
  .ratio-3\/2 {
    aspect-ratio: 3/2;
  }
</style>
