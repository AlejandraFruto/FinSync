import React, { useState } from "react";
import { Button } from "../../../../components/Button";
import { HeaderLogo2 } from "../../../../icons/HeaderLogo2";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./style.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <header className="header">
      <div className="nav-2">
        {/* Logo */}
        <div className="header-logo-wrapper">
          <HeaderLogo2 className="header-logo-2" color="#2E5076" />
        </div>

        {/* Desktop Navigation (Visible on large screens) */}
        <nav className="navigation-2">
          <div className="home-2">HOME</div>
          <div className="text-wrapper-54">ABOUT US</div>
          <div className="text-wrapper-54">CONTACT US</div>
        </nav>

        {/* Call-to-action button (Visible on large screens) */}
        <Button buttonClassName="button-9" className="button-8" property1="default" text="TRY IT NOW" />

        {/* Hamburger Icon (Visible on small screens) */}
        {/* Hamburger Icon (Only for mobile) */}
        <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: window.innerWidth > 768 ? "none" : "block" }}
      >
        {menuOpen ? <FaTimes size={30} color="#2E5076" /> : <FaBars size={30} color="#2E5076" />}
      </div>
      </div>

      {/* Mobile Navigation Menu (Hidden on large screens, toggled on small screens) */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <div className="home-2">HOME</div>
  <div className="text-wrapper-54">ABOUT US</div>
  <div className="text-wrapper-54">CONTACT US</div>

  {/* Add the button here */}
  <button className="mobile-menu-button">TRY IT NOW</button>
</nav>

    </header>
  );
};
