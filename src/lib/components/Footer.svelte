<script lang="ts">
	const kontak = [
		{
			label: 'smkn1seyegan@gmail.com',
			icon:
				'<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>',
			url: 'mailto:smkn1seyegan@gmail.com'
		},
		{
			label: '0274 866442',
			icon:
				'<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>',
			url: '/'
		},
		{
			label: 'smkn1seyeganofficial',
			icon:
				'<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>',
			url: 'https://www.instagram.com/smkn1seyeganofficial/'
		},
		{
			label: 'SMK N 1 Seyegan',
			icon:
				'<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>',
			url: 'https://www.youtube.com/channel/UCuW3605R7_3LNVMpkVxEsgA'
		}
	];
</script>

<footer class="bg-gray-700 text-white border-t-4 border-green-300">
	<div class="w-full max-w-screen-lg mx-auto px-4 py-8">
		<div class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8">
			<div class="text-center md:text-left md:w-1/3">
				<img class="w-32 h-32 mx-auto md:mx-0 mb-8" src="/logo.png" alt="Logo" />
				<h5 class="font-bold text-xl mb-4">SMK N 1 Seyegan</h5>
				<p class="text-lg font-light">
					SMKN 1 Seyegan merupakan sekolah menengah kejuruan dengan akreditasi A.
				</p>
			</div>
			<div class="text-center md:text-left md:w-1/3">
				<h5 class="font-bold mb-8 md:mb-4 text-center md:text-left text-xl">Lokasi</h5>
				<iframe
					title="Profile SMK N 1 Seyegan"
					class="w-full mb-2 border-4 border-white shadow-xl ratio-3/2 rounded-xl"
					src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SMK%20N%201%20Seyegan+(SMK%20N%201%20Seyegan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				/>
				<span class="text-xs font-light"
					>Jl. Kebonagung KM 8, Jamblangan, Margomulyo, Seyegan, Sleman, Daerah Istimewa Yogyakarta,
					55561</span
				>
			</div>
			<div class="text-center md:text-left md:w-1/3">
				<h5 class="font-bold mb-8 md:mb-4 text-center md:text-left text-xl">Kontak</h5>
				<div class="flex flex-col space-y-4">
					{#each kontak as { label, icon, url }}
						<a class="flex flex-row items-center space-x-4" href={url}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="text-green-300 h-6 w-6"
								viewBox="0 0 16 16"
							>
								{@html icon}
							</svg>
							<span class="text-lg font-light">{label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="bg-green-500 text-white text-center py-4">
		<p class="text-sm mb-2">
			Made by <a class="font-bold" target="_blank" href="https://github.com/toufiqnuur"
				>toufiqnuur</a
			>
			with <a class="font-bold" target="_blank" href="https://kit.svelte.dev/">Svelte Kit</a>
		</p>
		<p class="text-xs">
			Sebagian merupakan milik SMK N 1 Seyegan. Sebagian data yang ada merujuk kepada data website
			official <a class="font-bold" target="_blank" href="https://smkn1seyegan.sch.id/"
				>SMK N 1 Seyegan</a
			>.
		</p>
	</div>
</footer>

<style>
	.ratio-3\/2 {
		aspect-ratio: 3/2;
	}
</style>
