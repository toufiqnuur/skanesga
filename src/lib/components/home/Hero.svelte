<div class="hero">
	<div class="text-white text-center w-full max-w-screen-lg mx-auto px-4">
		<h1 class="font-bold text-4xl filter drop-shadow-lg mb-3">SMK N 1 Seyegan</h1>
		<p>Mutu Unggul Prima dalam Karya</p>
	</div>
</div>

<style>
	.hero {
		@apply flex items-center relative h-96;
	}
	.hero:before,
	.hero:after {
		content: '';
		height: 28rem;
		@apply w-full absolute -top-16 left-0;
		z-index: -1;
	}
	.hero:before {
		background: url(/banner.jpg);
		background-size: cover;
		background-position: center;
		background-blend-mode: hard-light;
		@apply bg-green-500;
	}
	.hero:after {
		@apply bg-black bg-opacity-60;
	}
</style>
