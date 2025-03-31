import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Pricing = () => {
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
          <div className="plan-title">Small business version</div>
          <div className="plan-title">Medium business version</div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="feature-row">
            <div className="feature-name">Feature {num}</div>
            <div className="checkmark">✓</div>
            <div className="checkmark">
              {num > 4 ? <span className="x-mark">✗</span> : '✓'}
            </div>
          </div>
        ))}
      </div>

      <div className="divider light"></div>

      <div className="pricing-section">
        <h3>Cost per year</h3>
        <div className="price-container">
          <div className="price-box">
            <span className="amount">$X</span>
            <span className="period">/year</span>
          </div>
          <div className="price-box">
            <span className="amount">$X</span>
            <span className="period">/year</span>
          </div>
        </div>
      </div>

      <div className="button-container">
        <Button className="pay-button" text="PAY NOW" link="https://finsync.lovable.app/auth"/>
        <Button className="pay-button" text="PAY NOW" link="https://finsync.lovable.app/auth"/>
      </div>
    </div>
  );
};