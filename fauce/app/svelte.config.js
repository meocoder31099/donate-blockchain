import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@': './src'
		}
	},
	compilerOptions: {
		runes: true
	},
	preprocess: vitePreprocess(),
	// vitePlugin: {
	// 	dynamicCompileOptions({ filename }) {
	// 		if (filename.includes('node_modules')) {
	// 			return { runes: undefined } // or false, check what works
	// 		}
	// 	}
	// },
};

export default config;
