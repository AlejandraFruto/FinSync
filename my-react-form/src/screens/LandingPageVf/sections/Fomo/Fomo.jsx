import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Fomo = () => {
  return (
    <div className="FOMO">
      <div className="fomo-container">
        <h2 className="fomo-title">
          <span>Don’t Let Manual Accounting</span>
          <span className="highlight"> Hold You Back</span>
        </h2>

        <p className="fomo-subtitle">
          <span className="highlight">Every Day</span> Without Automation Costs You More
        </p>

        <div className="fomo-content">
            <div className="fomo-text">
              <div className="fomo-warning">
                <span className="benefit-number">01</span>
                <div className="fomo-warning-text">
                  <span className="highlight">Errors pile up.</span>
                  <p>Risk inaccurate records and compliance issues.</p>
                </div>
              </div>

              <div className="fomo-warning">
                <span className="benefit-number">02</span> 
                <div className="fomo-warning-text">
                  <span className="highlight"> Lost hours in manual work.</span>
                  <p>Time you could spend on growing your business.</p>
                </div>
              </div>

              <div className="fomo-warning">
                <span className="benefit-number">03</span> 
                <div className="fomo-warning-text">
                  <span className="highlight"> Financial uncertainty.</span>
                  <p>Hard to track your numbers and make informed decisions.</p>
                </div>
              </div>
            </div>

            {/* Move Image Outside fomo-text */}
            <img
              className="fomo-image"
              alt="Downfall illustration"
              src="/images/downfall.png"
            />
        </div>


        <div clasName="fomo-second-part">
          <p className="fomo-subtitle">
            Start today and Take Control
          </p>
          <div className="fomo-benefits">
            <div className="benefit">
              <span className="benefit-number">01</span>
              <p className="benefit-text"> You will enjoy
                <span className="highlight"> error-free </span>  accounting, avoiding miscalculations and unnecessary corrections.
              </p>
            </div>
            <div className="benefit">
              <span className="benefit-number">02</span>
              <p className="benefit-text">
              You will always know where your money is going without manual tracking.
              </p>
            </div>
            <div className="benefit">
              <span className="benefit-number">03</span>
              <p className="benefit-text"> You will make
                <span className="highlight"> informed decisions</span>  with real-time financial insights.
              </p>
            </div>
          </div>

          </div>

          <Button className="fomo-button" text="GET STARTED TODAY" link="https://app.fin-sync.me/auth"  />
        </div>
        </div>
   
  );
};
