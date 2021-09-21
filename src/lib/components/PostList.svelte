<script lang="ts">
  export let post;
</script>

<div class="flex flex-wrap">
  {#each post as item}
    <div class="w-full md:w-1/3 md:px-2 py-2">
      <div class="bg-white p-4 rounded-xl shadow-xl">
        <img
          class="w-full rounded-lg mb-4"
          loading="lazy"
          src="/galeri/post_thumb.jpeg"
          alt={item.data.data.title} />
        <p class="text-sm text-gray-800 my-1">{item.data.data.date}</p>
        <a class="text-xl font-bold" href={`/post/${item.data.data.slug}`}
          >{item.data.data.title}</a>
      </div>
    </div>
  {/each}
</div>
