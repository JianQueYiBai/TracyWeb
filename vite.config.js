import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 代理所有以 `/api` 开头的请求
      '/api/': {
        target: 'http://54.248.140.244:8001', // 后端服务器地址
        changeOrigin: true, // 是否改变请求源（跨域时通常设置为 true）
        rewrite: (path) => path.replace('^', ''), // 可选：重写路径，去掉 `/api` 前缀
      },
    },
  },
})
