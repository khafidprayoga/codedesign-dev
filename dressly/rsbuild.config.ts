import { defineConfig } from '@rsbuild/core';
import { pluginSvelte, PluginSvelteOptions } from '@rsbuild/plugin-svelte';
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";

const svelteConfig: PluginSvelteOptions = {
  svelteLoaderOptions: {},
  preprocessOptions: {
    postcss: true,
  },
};


export default defineConfig({
  plugins: [pluginSvelte(svelteConfig), pluginImageCompress(['png','svg'])],
  html: {
    title: 'DressLy - Discover the Latest Fashion Trends',
    favicon: './public/favicon.png',
    meta: {
      description: 'DressLy is a fashion discovery platform that helps you find the latest fashion trends and styles.',
    }
  },
  performance:{
    chunkSplit: {
      strategy: 'split-by-experience',
      forceSplitting: {
        axios: /node_modules[\\/]axios/,
      },
    },
  },
  output:{
    polyfill: 'usage',
  }
});
