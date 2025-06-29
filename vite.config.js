import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Meu_Portfolio/', // 👈 ESSA LINHA É ESSENCIAL!
  plugins: [react()],
})
