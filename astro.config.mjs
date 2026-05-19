// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://mrityunjayaabsolutesolutions.com',
	output: 'static',
	integrations: [sitemap()],
	server: {
		host: '127.0.0.1',
		port: 4321,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
