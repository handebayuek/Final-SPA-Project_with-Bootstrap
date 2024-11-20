import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-column text-center">
          <p className="footer-p">&copy; 2021 Company. All rights reserved.</p>
        </div>
        <div className="footer-column text-center">
          <h5>About Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="">BotaniPure Mission</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-column text-center">
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} color="#1DA1F2" />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="#e95950" />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={24} color="#EE1D51" />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} color="#0A66C2" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column text-center">
          <h5>Contact Us</h5>
          <p className="footer-contact">📞 +1-234-567-890</p>
          <p className="footer-contact">✉️ info@company.com</p>
        </div>

        <div className="footer-column text-center">
          <h5>Customer Service</h5>
          <ul className="list-unstyled">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Shipping & Returns</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column text-center">
          <h5>Your Account</h5>
          <ul className="list-unstyled">
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Order History</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
