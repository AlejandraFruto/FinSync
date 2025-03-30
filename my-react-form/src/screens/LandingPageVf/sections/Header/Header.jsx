import React from "react";
import { Button } from "../../../../components/Button";
import { HeaderLogo2 } from "../../../../icons/HeaderLogo2";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="nav-2">
        <div className="nav-3">
          <div className="header-logo-wrapper">
            <HeaderLogo2 className="header-logo-2" color="#2E5076" />
          </div>

          <div className="div-33" />

          <div className="navigation-2">
            <div className="home-2">HOME</div>

            <div className="text-wrapper-54">ABOUT US</div>

            <div className="text-wrapper-54">CONTACT US</div>
          </div>
        </div>

        <Button
          buttonClassName="button-9"
          className="button-8"
          property1="default"
          text="TRY IT NOW"
        />
      </div>
    </header>
  );
};
