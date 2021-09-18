<script lang="ts">
  const info = [
    ["Jurusan", 7],
    ["Ruang Kelas", 44],
    ["Peserta Didik", 1570],
    ["Guru", 95],
  ];
</script>

<div class="w-full max-w-screen-xl mx-auto px-4 py-8">
  <div
    class="md:grid md:grid-flow-col space-y-8 md:space-y-0 md:divide-x-2 md:divide-gray-300 md:divide-solid">
    {#each info as item, index}
      <div class="text-center">
        <h3 class="font-black text-5xl text-green-500 mb-3">{item[1]}</h3>
        <p>{item[0]}</p>
      </div>
    {/each}
  </div>
</div>
