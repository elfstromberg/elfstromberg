import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import * as markdown from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

import MarkdownIt from 'markdown-it';

let md = MarkdownIt();

md.renderer.rules.hr = () => {
	return '</div><div class="prose">'
}

export default defineConfig({
	plugins: [
		markdown.plugin({
			mode: [
				markdown.Mode.HTML,
				markdown.Mode.TOC
			],
			markdownIt: md
		}),
		enhancedImages(),
		sveltekit()
	]
});
