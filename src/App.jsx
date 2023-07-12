import { useState } from "react";
import { FiDownload, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import "./App.css";
import logo from "./assets/MEDDTODAY@2x.png";
import health from "./assets/954528 (1)@2x.png";
import hero from "./assets/1881195@2x.png";
import Lung from "./assets/655315@2x.png";
import stomach from "./assets/829117@2x.png";
import eye from "./assets/4011806@2x.png";
import nose from "./assets/3904608@2x.png";
import ear from "./assets/2035058@2x.png";
import dental from "./assets/3904608@2x.png";
import muscle from "./assets/508849@2x.png";
import liver from "./assets/1713596@2x.png";
import hero1 from "./assets/Untitled-1@2x.png";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState("Chennai");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

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
            <select
              value={location}
              onChange={handleLocationChange}
              className="location-select"
            >
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              {/* Add more location options as needed */}
            </select>
            <input
              type="text"
              placeholder="Search for Modicicines and Health Products"
              value={searchInput}
              onChange={handleSearchChange}
              className="search-input"
            />
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
            <li>Treatment</li>
          </ul>
        </div>
      </header>
      <section className="hero-section">
        <img src={hero1} alt="Image" className="hero-image" />

        <p className="hero-text">FLAT 25% OFF MEDICINE</p>
        <ul className="hero-list">
          <li>Upload valid prescription</li>
          <li>Receive a confirmation</li>
          <li>Delivery at your doorstep</li>
        </ul>
      </section>
      <footer className="footer-section">
        <div className="footer-content">
          <img src={health} alt="Heart Care" className="footer-img" />
          <img src={hero} alt="Lung Care" className="footer-img" />
          <img src={Lung} alt="Stomach Care" className="footer-img" />
          <img src={stomach} alt="Eye Care" className="footer-img" />
          <img src={eye} alt="Nose Care" className="footer-img" />
          <img src={nose} alt="Car Care" className="footer-img" />
          <img src={ear} alt="Dental Care" className="footer-img" />
          <img src={dental} alt="Muscle Care" className="footer-img" />
          <img src={muscle} alt="Liver Care" className="footer-img" />
          <img src={liver} alt="Brain Care" className="footer-img" />
        </div>
      </footer>
    </div>
  );
};

export default App;
