import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// הגדרה ליצירת קובץ HTML אחד ויחיד שרץ בכל מקום
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000, // מבטיח שכל הנכסים ייכנסו לקובץ
  },
})
