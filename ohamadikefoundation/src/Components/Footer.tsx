import React from "react";
import SiteLogo from "../assets/icon.jpg";
import { useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={SiteLogo} alt="Site Logo" width={50} />
              <span>Ohamadike Foundation</span>
            </div>
            <p className="footer-description">
              Transforming lives through compassion and community development.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => navigate("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate("/about")}>About</button>
              </li>
              <li>
                <button onClick={() => navigate("/programs")}>Programs</button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")}>Contact</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Programs</h3>
            <ul className="footer-links">
              <li>
                <button>Education</button>
              </li>
              <li>
                <button>Healthcare</button>
              </li>
              <li>
                <button>Housing</button>
              </li>
              <li>
                <button>Empowerment</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About Us</h3>
            <p className="footer-description" style={{ fontSize: "0.875rem" }}>
              Registration: CAC/IT/N0 38276
              <br />
              Founded: April 22, 2010
              <br />
              <br />
              Part of Remigella International Group
            </p>
          </div>
        </div>

        <div className="footer-divider">
          <p>
            &copy; {currentYear} Ohamadike International Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
