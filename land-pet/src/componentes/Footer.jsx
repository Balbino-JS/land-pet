import { useState } from "react";
import "../CSS/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-title">Siga-nos</h3>
      <div className="footer-icons">
        <a href="https://www.youtube.com/shorts/XMwDBJ1SBQA" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/shorts/WZOA5TPWa_4" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/shorts/BL3BFEXvZDo" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/shorts/-KjmRpZRkbo" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
