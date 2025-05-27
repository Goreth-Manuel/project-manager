import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./translation/i18n.ts"
// import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { AuthProvider } from './contexts/AuthProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter> 
    <AuthProvider> 
    <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
