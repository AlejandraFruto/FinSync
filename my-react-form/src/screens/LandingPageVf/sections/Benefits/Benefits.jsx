import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits">
        <h2 className="benefits-title">More Time, More Clarity, More Growth</h2>
        <p className="benefits-subtitle">
          Don't worry anymore about your accountability, with FinSync you can:
        </p>

        <div className="benefits-grid">
          {/* Benefit Card 1 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <div className="icon-circle">
                <img className="line" alt="Line" src="https://c.animaapp.com/W9MUR0Mj/img/line-1.svg" />
                <img className="line-2" alt="Line" src="https://c.animaapp.com/W9MUR0Mj/img/line-2.svg" />
                <div className="ellipse" />
              </div>
            </div>
            <h3 className="benefit-title">SAVE TIME</h3>
            <p className="benefit-description">
              We know that the accounting process is time-consuming, and with our
              service, you can reduce this time.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                className="img-3"
                alt="Img"
                src="https://c.animaapp.com/W9MUR0Mj/img/60e4a1e7380756fecde7fb9c-icon-section-about-2-crypto-template-sv.svg"
              />
            </div>
            <h3 className="benefit-title">KEEP TRACK</h3>
            <p className="benefit-description">
              You'll always have a trail of any accounting activity or record
              made within your company.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <div className="icon-complex">
                <img className="vector" alt="Vector" src="https://c.animaapp.com/W9MUR0Mj/img/vector.svg" />
                <img className="mask-group" alt="Mask group" src="https://c.animaapp.com/W9MUR0Mj/img/mask-group-1@2x.png" />
                <img className="vector-2" alt="Vector" src="https://c.animaapp.com/W9MUR0Mj/img/vector-1.svg" />
                <img className="mask-group-2" alt="Mask group" src="https://c.animaapp.com/W9MUR0Mj/img/mask-group-2@2x.png" />
              </div>
            </div>
            <h3 className="benefit-title">ENSURE INSTANT ACCESS</h3>
            <p className="benefit-description">
              You can use our website at any time of day and anywhere to stay
              informed or upload new records.
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                className="img-4"
                alt="Img"
                src="https://c.animaapp.com/W9MUR0Mj/img/60e4a1e7380756f05de7fb9f-icon-spec-1-3-crypto-template-svg.svg"
              />
            </div>
            <h3 className="benefit-title">ASSURE SECURITY</h3>
            <p className="benefit-description">
              Your financial data is securely stored, ensuring that your company's
              records are always protected.
            </p>
          </div>

          {/* Featured Benefit (iPhone) */}
          <div className="featured-benefit">
            <h3 className="featured-title">COLLABORATE WITH YOUR TEAM</h3>
            <p className="featured-description">
              Multiple users can access and update records, making teamwork
              seamless and ensuring everyone stays informed.
            </p>
            <div className="iphone-container">
              <div className="iphone-frame">
                <img
                  className="iphone-screen"
                  alt="Pexels fauxels"
                  src="/images/benefits.jpg"
                />
              </div>
            </div>
          </div>
        </div>

         <Button className="button-7" property1="default" text="TRY IT NOW"  link="https://app.fin-sync.me/auth" />
       
      </div>
    </div>
  );
};