import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Pricing = () => {
  const features = [
    "Business management",
    "Employee management",
    "File uploading",
    "CSV download",
    "Latest AI technology",
    "Improved categorization",
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-h">
        <h1>Pricing</h1>
        <p>Choose the plan that best fits your business.</p>
      </div>

      <div className="divider"></div>

      <div className="comparison-table">
        <div className="table-pricing-h">
          <div className="empty-cell"></div>
          <div className="plan-title">Pro version</div>
          <div className="plan-title">Base version</div>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="feature-row">
            <div className="feature-name">{feature}</div>
            <div className="checkmark">✓</div>
            <div className="checkmark">
              {index >= 4 ? <span className="x-mark">✗</span> : "✓"}
            </div>
          </div>
        ))}
      </div>

      <div className="divider light"></div>

      <div className="pricing-section">
        <h3>Cost per year</h3>
        <div className="price-container">
          <div className="price-box">
            <span className="amount">$19.99</span>
            <span className="period">/1000 docs</span>
          </div>
          <div className="price-box">
            <span className="amount">$49.99</span>
            <span className="period">/5000 docs</span>
          </div>
        </div>
      </div>

      <div className="button-container">
        <Button className="pay-button" text="PAY NOW" link="https://app.fin-sync.me/auth" />
        <Button className="pay-button" text="PAY NOW" link="https://app.fin-sync.me/auth" />
      </div>
    </div>
  );
};
