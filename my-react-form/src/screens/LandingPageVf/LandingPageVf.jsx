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
      <div className="content">
        <div className="overlap-12">
          <Hook />
          <Header />
        </div>
        <img
          className="allies"
          alt="Allies"
          src="/images/allies.png"
        />
        <Services />
        <Benefits />
        <Reviews />
        <Fomo />
        <HowToGetService />
        <ComoFunciona />
        <Pricing />
      </div>

      <Footer />
    </div>
  );
};
