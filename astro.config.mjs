import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CSS Playground',
			description: '🎨 A collection of pure CSS and HTML examples — no JavaScript needed!',
			tableOfContents: false,
			social: {
				github: 'https://github.com/inigomarquinez/css-playground',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CSS Playground', slug: 'guides/playground' },
					],
				},
				{
					label: 'Pseudo-elements',
					autogenerate: { directory: 'pseudo-elements' },
				},
			],
		}),
	],
});
