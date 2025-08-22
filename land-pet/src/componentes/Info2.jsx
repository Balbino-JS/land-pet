import { useState } from "react";
import "../CSS/App.css";
import "../CSS/Info2.css"
import InfoBackground from '../assets/caes-brincando_-removebg-preview.png'
import Info1Background from '../assets/gatos-brincando3-removebg-preview.png'

function Info2() {
  return (
        <div className="info2-container">
      <div className="info2-content">
        
    
        <div className="info2-image left">
          <img src={InfoBackground} alt="cachorros brincando" />
        </div>

        
        <div className="info2-text">
          <h2>Bem-vindo ao nosso espaço</h2>
          <p>
            <strong>Oferecemos um ambiente seguro e acolhedor para o seu pet. 
            Aqui ele pode se hospedar, receber cuidados e se divertir 
            enquanto você realiza suas atividades com tranquilidade.</strong>
          </p>
          <p>
            <strong>Nosso espaço é preparado para garantir o bem-estar e a 
            felicidade dos seus companheiros de quatro patas.</strong>
          </p>
        </div>

        
        <div className="info2-image right">
          <img src={Info1Background} alt="gatos brincando" />
        </div>

      </div>
    </div>
  );
}

export default Info2;
