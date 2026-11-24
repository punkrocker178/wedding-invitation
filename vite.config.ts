import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const base = '/wedding-invitation/'

function prefixRootUrls(publicBase: string): Plugin {
  const normalized = publicBase.endsWith('/') ? publicBase : `${publicBase}/`
  const rewriteCss = (code: string) =>
    code.replace(
      /(url\(\s*['"]?)(\/(?!\/)[^)'"]+?)(['"]?\s*\))/g,
      (full, start: string, path: string, end: string) =>
        path.startsWith(normalized) ? full : `${start}${normalized}${path.slice(1)}${end}`,
    )

  return {
    name: 'prefix-root-urls',
    transform(code, id) {
      if (!/\.css(\?|$)/.test(id)) return null
      return rewriteCss(code)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), prefixRootUrls(base)],
})
