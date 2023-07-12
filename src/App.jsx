import { useState } from "react";
import { FiDownload, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
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
        <div className="div">
          <div className="header-content">
            <h1 className="header-text">
              <span>MEDICINE |</span>
              <span> COVID-19 |</span>
              <span>MEDICINE |</span>
              <span> AYUSH |</span>
              <span> AYURVEDA |</span>
              <span> CARE PLAN | </span>
              <span>Need Help ?</span>
            </h1>
            <div className="icons">
              <FiDownload className="app-img" />
              <FiHeart className="heart-img" />
              <FiShoppingCart className="profile-img" />
              <FiUser className="profile-img" />
            </div>
          </div>
        </div>
      </header>
      <header className="header-section">
        <div className="header-content">
          <div className="logo-heading">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="location">
            <FormControl variant="outlined" className="location-select">
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                value={location}
                onChange={handleLocationChange}
                label="Location"
              >
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                {/* Add more location options as needed */}
              </Select>
            </FormControl>
            <TextField
              type="text"
              placeholder="Search for Medicines and Health Products"
              value={searchInput}
              onChange={handleSearchChange}
              className="search-input"
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              className="search-button"
            >
              Upload Now
            </Button>
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
      <div className="hero-section">
        <img src={hero1} alt="Image" className="hero-image" />
        <div className="hero-text">
          <h3>
            <span>FLAT 25% OFF</span>
          </h3>
          <h3>
            <span>on MEDICINE order</span>
          </h3>
          <ul className="hero-list">
            <ol>1. Upload valid prescription</ol>
            <ol>2. Receive a confirmation</ol>
            <ol>3. Delivery at your doorstep</ol>
          </ul>
        </div>
      </div>
      <footer className="footer-section">
        <div className="footer-content">
          <span>
            <img src={health} alt="Heart Care" className="footer-img" />
            Heart Care
          </span>
          <span>
            <img src={hero} alt="Lung Care" className="footer-img" />
            Lung Care
          </span>
          <span>
            <img src={Lung} alt="Stomach Care" className="footer-img" />
            Stomach Care
          </span>
          <span>
            <img src={stomach} alt="Eye Care" className="footer-img" />
            Eye Care
          </span>
          <span>
            <img src={eye} alt="Nose Care" className="footer-img" />
            Nose Care
          </span>
          <span>
            <img src={nose} alt="Car Care" className="footer-img" />
            Ear Care
          </span>
          <span>
            <img src={ear} alt="Dental Care" className="footer-img" />
            Dental
          </span>
          <span>
            <img src={dental} alt="Muscle Care" className="footer-img" />
            Muscle Care
          </span>
          <span>
            <img src={muscle} alt="Liver Care" className="footer-img" />
            Liver Care
          </span>
          <span>
            <img src={liver} alt="Brain Care" className="footer-img" />
            Brain care
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
