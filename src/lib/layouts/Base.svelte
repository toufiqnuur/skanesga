<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="wrapper p-4">
	<div class="flex">
		<div class="post w-full overflow-hidden md:w-2/3 p-4 bg-white shadow-xl border text-base">
			<h3>{title}</h3>
			<slot />
		</div>
	</div>
</div>

<style>
	.post h3 {
		@apply text-2xl font-black mb-8;
	}
	.post :global(h5) {
		@apply text-xl font-black mb-3;
	}
	.post :global(p) {
		@apply font-serif leading-7;
	}
	.post :global(p):not(:last-child) {
		@apply mb-2;
	}
	.post :global(p + h5) {
		@apply mt-6;
	}
	.post :global(ol) {
		@apply list-decimal list-inside;
	}
	.post :global(ul) {
		@apply list-disc list-inside;
	}
</style>
