import React from "react";
import { HeaderLogo2 } from "../../../../icons/HeaderLogo2";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="logo-container">
            <HeaderLogo2 className="header-logo" color="white" />
          </div>
          <div className="socials">
            <img
              className="social-icon"
              alt="Instagram"
              src="https://c.animaapp.com/W9MUR0Mj/img/insta-1.svg"
            />
            <img
              className="social-icon"
              alt="Facebook"
              src="https://c.animaapp.com/W9MUR0Mj/img/facebook-1.svg"
            />
            <img
              className="social-icon"
              alt="LinkedIn"
              src="https://c.animaapp.com/W9MUR0Mj/img/linked-in-1.svg"
            />
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-menu">
            <div className="menu-header">
              <div className="menu-title">MENU</div>
            </div>
            <div className="menu-items">
              <div className="menu-column">
                <div className="menu-item active">HOME</div>
                <div className="menu-item">ABOUT US</div>
                <div className="menu-item">PRICING</div>
              </div>
              <div className="menu-column">
                <div className="menu-item">FAQS</div>
                <div className="menu-item">BLOG</div>
                <div className="menu-item">CONTACT US</div>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <div className="cta-content">
              <div className="cta-title">BE PART OF FINSYNC</div>
              <p className="cta-text">
                Focus on the business, leave us the numbers.
              </p>
              <div className="cta-button-container">
                <a href="https://app.fin-sync.me/" className="cta-button-link">
                <button className="cta-button">
                  <div className="button-text">TRY IT NOW</div>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright">All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};