import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que o servidor seja acessível externamente
    cors: true,
    hmr: {
      clientPort: 443 // Porta para o Hot Module Replacement em ambientes como o CodeSandbox
    },
    // Adicione a seguinte linha para permitir o host específico
    allowedHosts: ['632wnr-5173.csb.app', 'https://t3-financial-crime-unit-2-98db06354519e.webflow.io']
  }
})
