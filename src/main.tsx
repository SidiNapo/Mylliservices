
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add RTL and LTR CSS variables
document.documentElement.style.setProperty('--direction', 'ltr');
document.documentElement.style.setProperty('--reverse-direction', 'rtl');

const savedLanguage = localStorage.getItem('language');
if (savedLanguage === 'ar') {
  document.documentElement.dir = 'rtl';
  document.documentElement.style.setProperty('--direction', 'rtl');
  document.documentElement.style.setProperty('--reverse-direction', 'ltr');
}

createRoot(document.getElementById("root")!).render(<App />);
