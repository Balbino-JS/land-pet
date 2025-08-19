import { useState } from 'react'
import '../CSS/App.css'
import Navbar from './Navbar'
import Home from './Home'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <h3>Siga-nos</h3>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={30} color="#1877F2" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={30} color="#E4405F" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter size={30} color="#1DA1F2" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} color="#0A66C2" />
        </a>
      </div>
    </footer>
  );
}

export default Footer