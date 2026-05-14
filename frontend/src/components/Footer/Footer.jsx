import React from 'react';
// Style Connection
import './Footer.css';
// Assets Connection
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque
            quae molestiae voluptatibus exercitationem deleniti omnis iste iure!
            Aut iusto quis inventore assumenda, nihil sed magnam expedita
            mollitia nisi eos corporis, repellendus dolorem quas sapiente
            voluptas.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>

          <ul>
            <li>+90-212-336-3636</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
