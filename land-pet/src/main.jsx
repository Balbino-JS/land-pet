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
import Whats from './componentes/Whats.jsx';
import Testimony from './componentes/Testimo.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Navbar />
    <Home /> 
    <Whats />
    <Info1 />
    <Info2 />
    <Work />
    <Testimony />
    <About />
    <Footer />   
    
  </StrictMode>
);
