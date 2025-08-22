import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/land-pet",
  server: {
    open: true, 
    hmr: {
      overlay: false // Não mostra mais o overlay vermelho
    }
  }
})
