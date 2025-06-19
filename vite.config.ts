import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // relative paths for manual deploy or subfolders
  plugins: [react()],
})