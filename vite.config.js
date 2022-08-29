import {
  defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite'
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-3EVNBKNWPN',
      },
    })
  ],
  define: {
    'process.env': process.env,
  },
});