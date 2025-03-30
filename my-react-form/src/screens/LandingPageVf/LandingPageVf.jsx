import React from "react";
import { Benefits } from "./sections/Benefits";
import { ComoFunciona } from "./sections/ComoFunciona";
import { Fomo } from "./sections/Fomo";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hook } from "./sections/Hook";
import { HowToGetService } from "./sections/HowToGetService";
import { Pricing } from "./sections/Pricing";
import { Reviews } from "./sections/Reviews";
import { Services } from "./sections/Services";
import "./style.css";

export const LandingPageVf = () => {
  return (
    <div className="landing-page-VF">
      <div className="div-34">
        <div className="overlap-11">
          <Footer />
          <div className="finsync">FINSYNC</div>
        </div>

        <Pricing />
        <ComoFunciona />
        <HowToGetService />
        <Fomo />
        <Reviews />
        <Benefits />
        <Services />
        <img
          className="allies"
          alt="Allies"
          src="https://c.animaapp.com/W9MUR0Mj/img/allies.png"
        />

        <div className="overlap-12">
          <Hook />
          <Header />
        </div>
      </div>
    </div>
  );
};
