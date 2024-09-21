import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: { // adding proxy
        proxy: {
            '/api': {
                target: "https://dm-gallery-backend-api.onrender.com",
                changeOrigin: true,
                secure: false,
                ws: true,
            }
        }
    },

    plugins: [react()]
})