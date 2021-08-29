<script lang="ts">
	const image = [
		{
			capt: 'English Speaking Club',
			src: '/galeri/English-Speaking-Club-150x150.png'
		},
		{
			capt: 'Basket',
			src: '/galeri/basket-150x150.png'
		},
		{
			capt: 'Hadroh',
			src: '/galeri/Hadroh-150x150.png'
		},
		{
			capt: 'Karya Ilmiah Remaja',
			src: '/galeri/Karya-Ilmiah-Remaja-150x150.png'
		},
		{
			capt: 'Palang Merah Remaja',
			src: '/galeri/pmr-150x150.png'
		}
	];
</script>

<div class="">
	<div class="w-full max-w-screen-lg px-2 py-8 mx-auto">
		<h3 class="text-3xl text-center font-black mb-3">Galeri</h3>
		<div class="flex flex-wrap">
			{#each image as { capt, src }}
				<div class="w-full md:w-1/3 px-2 py-2">
					<div class="relative bg-white p-4 rounded-xl shadow-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="absolute w-10 h-10 -top-2"
							viewBox="0 0 16 16"
						>
							<path
								d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
							/>
						</svg>
						<img class="w-full rounded-lg mb-4" {src} alt={capt} />
						<p class="text-sm text-gray-800">{capt}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
