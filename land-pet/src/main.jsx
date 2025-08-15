import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './componentes/App.jsx';
import Navbar from './componentes/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
  </StrictMode>
);
