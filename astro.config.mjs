import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), preact({ compat: true })],
  vite: {
    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
      }
    }
  }
});