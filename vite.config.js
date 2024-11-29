import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern', // 指定使用 Modern API
      },
    },
  },
  test:{
    environment:'jsdom'
  },
  server: {
    port: 3000,
  },
});