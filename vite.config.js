import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const resolvePath = (src) => {
  return path.resolve(__dirname, src)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolvePath("src"),
      "components": resolvePath("src/components"),
      "styles": resolvePath("src/styles"),
      "pages": resolvePath("src/pages"),
      "layout": resolvePath("src/layout"),
      "utils": resolvePath("src/utils"),
      "apis": resolvePath("src/apis"),
    },
  },
  plugins: [
    vue(),
    /* ... */
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
})
