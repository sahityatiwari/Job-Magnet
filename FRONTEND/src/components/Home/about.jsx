import React from 'react';
import { FaBuilding, FaUser, FaLightbulb } from 'react-icons/fa';


const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <h1>About Job Magnet</h1>
        <p>Connecting job seekers with dream jobs</p>
      </header>
      <section className="about-cards">
        <div className="about-card">
          <FaBuilding className="icon" />
          <h2>Our Mission</h2>
          <p>To provide a platform for job seekers to find their dream jobs and for employers to find the best talent.</p>
        </div>
        <div className="about-card">
          <FaUser className="icon" />
          <h2>Our Team</h2>
          <p>A team of passionate individuals dedicated to making job searching easier and more efficient.</p>
        </div>
        <div className="about-card">
          <FaLightbulb className="icon" />
          <h2>Our Vision</h2>
          <p>To be the leading job search platform, connecting job seekers with dream jobs and empowering employers to find the best talent.</p>
        </div>
      </section>
      <section className="about-story">
        <h2>Our Story</h2>
        <p>Job Magnet was founded in [year] with the goal of making job searching easier and more efficient. Our team of passionate individuals has worked tirelessly to create a platform that connects job seekers with dream jobs and empowers employers to find the best talent.</p>
      </section>
    </div>
  );
};

export default AboutPage;
