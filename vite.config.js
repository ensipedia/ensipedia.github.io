import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { functionsMixins } from "vite-plugin-functions-mixins";

export default defineConfig({
	plugins: [
	  sveltekit({
	    adapter: adapter({
		    pages: "build",
		    assets: "build",
		    fallback: undefined,
		    precompress: false,
		    strict: true
		  })
	  }),
	  functionsMixins({ deps: ["m3-svelte"] })
	]
});
