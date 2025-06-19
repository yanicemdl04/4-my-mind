import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false, 
  },
=======
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
>>>>>>> e6506250cbf9858bbba40b58b01a9174722a5a59
});