import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Configurar el host para escuchar en todas las interfaces
    port: 3000, // Configurar el puerto que deseas utilizar
  },
  build: {
    // Configuración de optimización para la producción
    // Habilitar la eliminación de código muerto
    minify: 'terser',
    // Opcional: habilitar la eliminación de código muerto específicamente para los módulos de producción
    target: 'esnext',
  },
});
