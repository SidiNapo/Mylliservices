import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple app initialization
console.log('🚀 Mylli Services starting...');

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error('Root element not found');
}
