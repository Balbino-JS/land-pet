import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './componentes/App.jsx';
import Navbar from './componentes/Navbar.jsx';
import Home from './componentes/Home.jsx';
import About from './componentes/About.jsx';
import Info1 from './componentes/Info1.jsx';
import Info2 from './componentes/Info2.jsx';
import Work from './componentes/work.jsx';
import Footer from './componentes/Footer.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Home /> 
    <Info1 />
    <Info2 />
    <Work />
    <About />
    <Footer />
    
  </StrictMode>
);
