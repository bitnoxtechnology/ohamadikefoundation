"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import "../Styles/Navbar.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Heart
            className="navbar-logo-icon"
            style={{ width: "24px", height: "24px" }}
          />
          <span>Ohamadike Int Foundation</span>
        </Link>

        <div className="navbar-nav">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-nav-item ${
                isActive(item.path) ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button type="button" className="navbar-donate-btn">
          <Link
            to={"https://paystack.shop/pay/ohamadike-foundation"}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Donate Now
          </Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-mobile-menu"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <div>
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-menu-item ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button type="button" className="mobile-menu-donate">
              <Link
                to={"https://paystack.shop/pay/ohamadike-foundation"}
                target="_blank"
                rel="noreferrer"
              >
                Donate Now
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
