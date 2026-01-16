import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { functionsMixins } from "vite-plugin-functions-mixins";

export default defineConfig({
	plugins: [
	  sveltekit(),
	  functionsMixins({ deps: ["m3-svelte"] })
	]
});
