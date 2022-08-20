import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // exposed docker image port
    host: true
  },
  plugins: [react()]
});
