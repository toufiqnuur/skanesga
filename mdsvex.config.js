const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/lib/layouts/Base.svelte'
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
