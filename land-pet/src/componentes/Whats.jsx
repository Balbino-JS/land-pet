import { useState } from "react";
import "../CSS/App.css";
import "../CSS/Whats.css"
import { FaWhatsapp } from "react-icons/fa";

function Whats() {
  return (
    <div className="whats-float">
      <a
        href="https://www.youtube.com/shorts/U5UqkSEnKC8/shorts/U5UqkSEnKC8/shorts/XMwDBJ1SBQA"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Whats;
