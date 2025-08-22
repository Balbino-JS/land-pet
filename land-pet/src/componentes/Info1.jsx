import { useState } from "react";
import "../CSS/App.css";
import "../CSS/Info1.css"
import InfoBackground from "../assets/gato-sem-fundo.png";

function Info1() {
  return (
    <div className="info1-container">
      <div className="info1-section-container">
        
        <div className="info1-text-container">
          <div className="primary-subheading"><h2>O Melhor Cuidado para Cães e Gatos: De Filhote a Idoso, do Dia a Dia ao Hotelzinho</h2></div>

          <div className="info1-heading">
            <p className="primary-text">
              Desenvolvido para atender a cada fase e porte, a nossa solução é pensada para a vida inteira do seu melhor amigo. De filhotes a pets idosos, de raças pequenas a grandes, temos uma opção sob medida para garantir saúde e vitalidade todos os dias.
            </p>
          </div>
        </div> 
        <img src={InfoBackground} alt="gato sem o fundo da imagem" />       
      </div>
    </div>
  );
}

export default Info1;


{/* */}