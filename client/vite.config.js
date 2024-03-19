import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true, // Optional: Ensure Vite uses exactly port 3000, failing to start otherwise
    // Enable this if you're having issues with live reload in Docker
    hmr: {
      clientPort: 3000
    }
  }
};
