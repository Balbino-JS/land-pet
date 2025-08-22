import "../CSS/App.css";
import "../CSS/Home.css"
import BannerBackground from "../assets/three-dogs.jpg";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container" id="Home">
      <div className="home-banner-container">

        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="banner" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">O lugar que o seu Pet merece estar!</h1>
          <p className="text" style={{margin:"20px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            esse amet, veniam ad hic, nihil quaerat quas blanditiis delectus
            voluptatum obcaecati minus quo molestiae ut laborum iste labore
            ipsam voluptates!
          </p>

          <button className="secondary-button">Fale conosco</button>

          <p className="text" style={{margin:"20px"}}>
            Venha conhece nossa loja e traga seu cãozinho!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
