import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 此处插件有更新，所以代码与教程有些不同
    createStyleImportPlugin(
      {
        libs: [
          {
            libraryName: 'zarm',
            exModules: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`
            }
          }
        ]
      }
    ),

  ],
  
  css: {
    // 防止自定义样式重名
    modules: {
      localsConvention: 'dashesOnly'
    },
    // 采用Less作为CSS预处理器
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnable: true,
      }
    }
  },

  server: {
    // 配置代理
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成target的值
        target: 'http://127.0.0.1:7001/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\api/,'') //将 /api 重写为空。

      }
    }
  },

  // resolve.alias 别名设置
  resolve: {
    alias: {
      '@': path.resolve(_dirname, 'src'), // src路径
      'utils': path.resolve(_dirname, 'src/utils') // src路径
    }
  },
   
})
