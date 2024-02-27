import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),dts()],
  build: {
    lib: {
      name: 'radix-vue',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts')
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue'
        }
      }
    }
  }
})
