import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { readdirSync } from 'fs'

const getAllPostFiles = () => {
  return readdirSync(join(__dirname, 'content/posts'))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // @ts-ignore
  ssgOptions: {
    format: 'cjs',
    script: 'async',
    includedRoutes(paths, routes) {
      return routes.flatMap((route) => {
        return route.name === 'Posts'
          ? getAllPostFiles().map(fileName => `/posts/${fileName.replace('.md', '')}`)
          : route.path
      })
    },
  },
})
