import "../CSS/App.css";
import Navbar from "./Navbar";
import BannerBackground from "../assets/three-dogs.jpg";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container">
      <div className="home-bannerImage-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="banner" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">O lugar do seu Pet merece estar!</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            esse amet, veniam ad hic, nihil quaerat quas blanditiis delectus
            voluptatum obcaecati minus quo molestiae ut laborum iste labore
            ipsam voluptates!
          </p>

          <button className="secondary-button">
            Fale conosco <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
