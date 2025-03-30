import React from "react";
import { HeaderLogo2 } from "../../../../icons/HeaderLogo2";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-3">
              <HeaderLogo2 className="header-logo" color="white" />
            </div>
          </div>

          <div className="socials">
            <img
              className="img"
              alt="Insta"
              src="https://c.animaapp.com/W9MUR0Mj/img/insta-1.svg"
            />

            <img
              className="img"
              alt="Facebook"
              src="https://c.animaapp.com/W9MUR0Mj/img/facebook-1.svg"
            />

            <img
              className="img"
              alt="Linked in"
              src="https://c.animaapp.com/W9MUR0Mj/img/linked-in-1.svg"
            />
          </div>
        </div>

        <div className="menu">
          <div className="navigation">
            <div className="menu-wrapper">
              <div className="text-wrapper">MENU</div>
            </div>

            <div className="nav">
              <div className="menu-2">
                <div className="home">HOME</div>

                <div className="text-wrapper-2">ABOUT US</div>

                <div className="text-wrapper-2">PRICING</div>
              </div>

              <div className="menu-3">
                <div className="tokens">FAQS</div>

                <div className="text-wrapper-2">BLOG</div>

                <div className="text-wrapper-2">CONTACT US</div>
              </div>
            </div>
          </div>
        </div>

        <div className="download-our">
          <div className="group">
            <div className="download-our-2">BE PART OF FINSYNC</div>

            <p className="lorem-ipsum-dolor">
              Focus on the business, leave us the numbers.
            </p>

            <div className="buttons">
              <button className="app-store-wrapper">
                <div className="app-store">TRY IT NOW</div>
              </button>
            </div>
          </div>
        </div>

        <div className="div-4" />

        <div className="text-wrapper-3">All rights reserved</div>
      </div>
    </div>
  );
};
