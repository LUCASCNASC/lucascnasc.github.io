import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        testCaseWriting: resolve(projectRoot, 'test-case-writing.html'),
        testPrioritization: resolve(projectRoot, 'test-prioritization.html'),
      },
    },
  },
});
