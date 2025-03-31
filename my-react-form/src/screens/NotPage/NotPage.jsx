import React from "react";

import { Footer } from "./LandingPageVf/sections/Footer";
import { Header } from "./LandingPageVf/sections/Header";
import { NotFound} from ".NotFound"
import "./style.css";

export const NotPage = () => {
  return (
    <div className="404Page">
      <div className="content">
        <div className="overlap-12">
          <Header />
        </div>
          <NotFound />
        </div>
      <Footer />
    </div>
  );
};
