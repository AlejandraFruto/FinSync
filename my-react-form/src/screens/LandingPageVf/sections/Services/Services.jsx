import React from "react";
import "./style.css";

export const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <p className="struggling-with">
            <span className="text-highlight">Struggling</span> with Manual Bookkeeping?
          </p>
          <p className="sub-text">Automate it instantly with our services!</p>
        </div>
        <div className="services-content">
           {/* First Text (Left) */}
          <div className="text-content">
            <h3>Accounting Book Automation</h3>
            <p>
              Record your daily transactions <strong>quickly</strong> and <strong>automatically</strong>, reducing errors and ensuring compliance with accounting regulations.
            </p>
          </div>
          
          {/* First Image (Right) */}
          <div className="image-container">
            <img
              className="file-synchronization"
              alt="File synchronization"
              src="/images/sync.png"
            />
          </div>
        </div>


        <div className="services-content reverse">
          {/* Second Text + Second Image */}
          <div className="text-content">
            <h3>Transaction Classification</h3>
            <p>
              Automatically categorize your transactions and expenses <strong>based on your needs</strong> to easily find them and optimize your company's financial management.
            </p>
          </div>
          <div className="image-container"> <img
              className="file-searching-amico"
              alt="File searching amico"
              src="/images/search.png"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
