import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import * as markdown from 'vite-plugin-markdown';
import { defineConfig } from 'vite';

import MarkdownIt from 'markdown-it';

let md = MarkdownIt();

md.renderer.rules.hr = () => {
	return '</div><div class="prose">'
}

var defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
	return self.renderToken(tokens, idx, options);
};
  
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
	// Add a new `target` attribute, or replace the value of the existing one.
	tokens[idx].attrSet('target', '_blank');

	// Pass the token to the default renderer.
	return defaultRender(tokens, idx, options, env, self);
};

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
