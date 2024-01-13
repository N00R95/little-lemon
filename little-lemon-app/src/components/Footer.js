import React from 'react';
import logo from '../assets/Logo.svg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <section className="doormat-navigation">
        <h3>Doormat Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </section>

      <section className="contact-us">
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 123 Main St, Cityville</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: example@example.com</li>
        </ul>
      </section>

      <section className="social-media">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </section>

      
    </footer>
  );
};

export default Footer;
