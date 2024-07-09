import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </header>
      <section className="contact-info">
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h2>Contact Person</h2>
          <p>Sahitya Tiwari</p>
          <p>Mobile: 9770426463</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>sahityatiwari90035@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Address</h2>
          <p>Cantt, Sagar, M.P, 470001</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
