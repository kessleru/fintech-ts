import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Publicado em https://kessleru.github.io/fintech-ts/
  base: '/fintech-ts/',
  plugins: [react()],
})
