import { useState } from "react";
import "../CSS/App.css";
import "../CSS/Work.css"
import GatinhosBackground from "../assets/crianca-gatos.jpg";
import MulherolhandoCao from "../assets/mulher-olhando-cao.jpg";
import PiscinaCachorro from "../assets/piscina-cachorro.jpg";
import SpaCachorro from "../assets/spa-cachorro.jpg";
import SpaGatos from "../assets/spa-gatos.jpg";
import GatoLa from "../assets/gatinhos-la.jpg";
import CriancaCachorro from "../assets/crianca-cachorro.jpg";
import CachorroCeu from "../assets/cao-olhando-ceu.jpg";
import ThreeCats from "../assets/three-cats.jpg";
import CaoGatos from "../assets/cao-gatos.jpg";

function Work() {
  return (
    <div className="work-pai-container" id="Work">
      <div className="work-container">
        <div className="work-section-container">
          <div className="work-section-text">
            <h1 className="primary-work">Nosso Trabalho</h1>
            <p className="work-text">
              Sabemos que seu pet é parte da sua família. Deixá-lo para viajar
              ou em uma ocasião especial pode ser uma preocupação, mas não
              precisa ser. Nossa hospedagem foi criada para oferecer mais do que
              um espaço seguro: é um ambiente acolhedor onde seu cão ou gato
              recebe carinho, atenção e se diverte enquanto você está fora.
            </p>
          </div>
        </div>
      </div>

      <h2 className="vitrine-work">Vitrine</h2>

      <div class="container">
        <div class="card">
          <img
            src={MulherolhandoCao}
            alt="mulher olhando o cão"
            className="card-img"
          />
          <div class="content">
            <h2>01</h2>
            <h3>Gatos</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img
            src={GatinhosBackground}
            alt="gatinho brincando com criança"
            className="card-img"
          />
          <div class="content">
            <h2>02</h2>
            <h3>Cães de pequeno e medio porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img
            src={PiscinaCachorro}
            alt="piscia paa cachorro"
            className="card-img"
          />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img src={SpaCachorro} alt="spa para cachorro" className="card-img" />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img src={SpaGatos} alt="spa para gatos" className="card-img" />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img src={GatoLa} alt="gato brinco com lã" className="card-img" />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img
            src={CriancaCachorro}
            alt="criança brincando com cachorro"
            className="card-img"
          />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img
            src={CachorroCeu}
            alt="cachorro olhando o ceu"
            className="card-img"
          />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img src={ThreeCats} alt="three cats" className="card-img" />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
        <div class="card">
          <img
            src={CaoGatos}
            alt="cão e gatos brincando"
            className="card-img"
          />
          <div class="content">
            <h2>03</h2>
            <h3>Cães de grande porte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              minus dolorum hic aliquid suscipit ipsa commodi, earum voluptatum
              iure fugit, saepe eos, magnam sequi facere doloribus quos
              excepturi velit. Eaque!.
            </p>
            <a href="#">Mais Informação</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
