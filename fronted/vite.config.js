import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  /** 
   * 实验二：开发模式下通过配置dev server正向代理实现跨域。进行完实验二，记得把这段注释掉！！
   */
  // server: {
  //   proxy: {
  //     // 字符串简写法：http://localhost:5173/api -> http://localhost:3000/api，这种方式不能解决跨域，这里只是做拓展介绍
  //     // '/api': 'http://localhost:3000',

  //     // http://localhost:5173/api/bar -> http://localhost:3000/bar
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   },
  // }

})
