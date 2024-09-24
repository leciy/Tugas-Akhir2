import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Digunakan untuk mendefinisikan vite saat ini
export default defineConfig({
  // menggunakan plugins yang disediakan react
  plugins: [react()],

  // menjalankan aplikasi di port 3000
  server: { port: 3000 },
});
