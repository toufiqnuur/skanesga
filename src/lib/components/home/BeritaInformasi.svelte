<script lang="ts">
	export let post;
</script>

<div class="bg-gray-100">
	<div class="wrapper py-8 xl:py-24">
		<h3 class="text-3xl text-center font-black mb-3">Berita & Informasi</h3>
		<div class="flex flex-wrap">
			{#each post as item}
				<div class="w-full md:w-1/3 px-2 py-2">
					<div class="bg-white p-4 rounded-xl shadow-xl">
						<img
							class="w-full rounded-lg mb-4"
							loading="lazy"
							src={item.data.data.thumb}
							alt={item.data.data.title}
						/>
						<p class="text-sm text-gray-800 my-1">{item.data.data.date}</p>
						<a class="text-xl font-bold" href={`/post/${item.data.data.slug}`}
							>{item.data.data.title}</a
						>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a class="text-white bg-green-500 focus:bg-green-300 shadow-xl rounded py-3 px-5" href="/"
				>Berita lainnya</a
			>
		</div>
	</div>
</div>

<style>
	.wrapper {
		@apply px-2;
	}
</style>
