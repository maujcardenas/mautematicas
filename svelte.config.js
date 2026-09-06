import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess: mdsvex({
        extensions: ['.md'],
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, { output: 'html' }]]
    }),
    kit: {
        adapter: adapter()
    }
};

export default config;