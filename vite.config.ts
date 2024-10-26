import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname, 'config/src/') // ソースがあるフォルダ
const outDir = resolve(__dirname, 'static/js') // 出力するフォルダ

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: 'config/',
  build: {
    outDir,
    emptyOutDir: false, // outDirを全消しするが警告を出さない
    rollupOptions: {
      input: {
        config: resolve(root, 'main.ts'), // main.ts を起点にビルドする
      },
      output: {
        format: 'iife', // 即時関数で囲む
        dir: outDir, // 「static/js」ディレクトリーの下にビルド後のファイルを生成する
        entryFileNames: '[name].js', // 生成物のファイル名は input のキー名とする
        // 今回は「desktop.js」というファイルが生成される
      },
    },
  },
})
