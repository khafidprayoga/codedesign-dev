import { defineConfig } from '@rsbuild/core';
import { pluginSvelte, PluginSvelteOptions } from '@rsbuild/plugin-svelte';


const svelteConfig: PluginSvelteOptions = {
  svelteLoaderOptions:{},
  preprocessOptions:{
    postcss: true,
  }
}

export default defineConfig({
  plugins: [pluginSvelte(svelteConfig)],
  source:{
    alias:{
      '@components': './src/components',
      '@assets': './src/assets',
    }
  },
  html:{
    title: "DressLy - Discover the Latest Fashion Trends",
    favicon: "./public/favicon.png",
  }
});
