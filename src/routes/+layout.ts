import { init, waitLocale, getLocaleFromNavigator } from 'svelte-intl-precompile';
import { registerAll, availableLocales } from '$locales';

registerAll();

export async function load() {
	init({
		initialLocale: getLocaleFromNavigator() || undefined,
		fallbackLocale: availableLocales[0]
	});
	await waitLocale();
}
