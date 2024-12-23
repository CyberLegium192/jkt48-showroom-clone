import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { config } from 'dotenv';

config();

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'import.meta.env': {
      ...process.env, // Inject semua variabel
    },
  },
})
