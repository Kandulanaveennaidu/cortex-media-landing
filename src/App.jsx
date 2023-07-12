import { FiDownload, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "./assets/MEDDTODAY@2x.png";
import "./App.css";
import heart from "./assets/508849@2x.png";
const App = () => {
  return (
    <div>
      <header className="header-section">
        <div className="header-content">
          <h1 className="header-text">
            MEDICINE | COVID-19 | AYUSH | AYURVEDA | CARE PLAN | need Help ?
          </h1>
          <div className="icons">
            <FiDownload className="app-img" />
            <FiHeart className="heart-img" />
            <FiShoppingCart className="profile-img" />
            <FiUser className="profile-img" />
          </div>
        </div>
      </header>
      <header className="header-section">
        <div className="header-content">
          <div className="logo-heading">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="location">
            <p className="location-text"> ^Chennai</p>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" className="search-input" />
            <img src="search-icon.png" alt="Search" className="search-icon" />
          </div>
        </div>
      </header>
      <header className="header-section">
        <div className="header-content">
          <ul className="header-list">
            <li>Covid-19 Essential |</li>
            <li>Diabetes |</li>
            <li>Eyewear |</li>
            <li>Ayush |</li>
            <li>Ayurvedic |</li>
            <li>Home & Baby |</li>
            <li>Devices |</li>
            <li>Surgicals |</li>
            <li>Sexual Wellness |</li>
            <li>Treatment|</li>
          </ul>
        </div>
      </header>
      <section className="hero-section">
        <img src="image.png" alt="Image" className="hero-image" />
        <p className="hero-text">FLAT 25% OFF MEDICINE</p>
        <ul className="hero-list">
          <li>Upload valid prescription</li>
          <li>Receive a confirmation</li>
          <li>Delivery at your doorstep</li>
        </ul>
      </section>
      <footer className="footer-section">
        <div className="footer-content">
          <img src={heart} alt="Heart Care" className="footer-img" />
          <img src="lung-care.png" alt="Lung Care" className="footer-img" />
          <img
            src="stomach-care.png"
            alt="Stomach Care"
            className="footer-img"
          />
          <img src="" alt="Eye Care" className="footer-img" />
          <img src="nose-care.png" alt="Nose Care" className="footer-img" />
          <img src="car-care.png" alt="Car Care" className="footer-img" />
          <img src="dental-care.png" alt="Dental Care" className="footer-img" />
          <img src="muscle-care.png" alt="Muscle Care" className="footer-img" />
          <img src="liver-care.png" alt="Liver Care" className="footer-img" />
          <img src="brain-care.png" alt="Brain Care" className="footer-img" />
        </div>
      </footer>
    </div>
  );
};

export default App;
