import React, { useContext } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../../main.jsx"; // Import the Context from App.js

const HeroSection = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover your dream carrier <br />at Job Magnet</h1>
          <p>
            Welcome to Job Magnet, your ultimate destination for finding <br />
            the perfect job that aligns with your skills, <br />
            passions, and career aspirations.
          </p>
          <div className="hero-buttons">
            {isAuthorized ? (
              <Link to="/demo">
                <button className="demo-btn">Get Demo</button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="login-btn">
                    <FaUsers /> Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="register-btn">
                    <FaUserPlus /> Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="hero-image">
          <img src="workhero.png" alt="Work Hero Image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;