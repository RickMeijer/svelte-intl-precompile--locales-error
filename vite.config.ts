import { sveltekit } from '@sveltejs/kit/vite';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
		port: 8080
	},
	plugins: [sveltekit(), precompileIntl('locales')]
};

export default config;
