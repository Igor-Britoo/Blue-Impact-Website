import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações para build com pouca memória
    minify: 'esbuild', // Usar esbuild que usa menos memória
    target: 'es2015', // Target moderno para otimização
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Estratégia de chunks mais granular para reduzir uso de memória
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
            if (id.includes('styled-components')) {
              return 'styled';
            }
            if (id.includes('swiper') || id.includes('carousel')) {
              return 'carousel';
            }
            // Outros vendors em chunks menores
            return 'vendor';
          }
        }
      },
      // Configurações para reduzir uso de memória
      cache: false,
      maxParallelFileOps: 1
    },
    // Chunk size menor para reduzir uso de memória
    chunkSizeWarningLimit: 500,
    // Desabilitar sourcemap para economizar memória
    sourcemap: false,
    // Otimizações específicas para pouca RAM
    emptyOutDir: true,
    reportCompressedSize: false
  },
  // Otimizações de resolução
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Otimizar dependências para usar menos memória
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['swiper']
  },
  // Configurações do servidor para economizar memória
  server: {
    hmr: {
      overlay: false
    }
  }
})

