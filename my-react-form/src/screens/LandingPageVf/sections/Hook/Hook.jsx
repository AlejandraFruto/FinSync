import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Hook = () => {
  return (
    <div className="hook">
      <div className="text-content">
        <p className="text-wrapper-52">
          <strong>Optimize your accounting records without complications</strong>
        </p>

        <p className="text-wrapper-53">
          Focus on the business, leave us the numbers.
        </p>

        <div className="button-wrapper">
          <Button className="button-7" property1="default" text="TRY IT NOW"  link="https://app.fin-sync.me/" />
        </div>
      </div>

      <div className="image-container-hook">
        <img
          className="investment-data-bro"
          alt="Investment data bro"
          src="/images/hook.png"
        />
      </div>
    </div>
  );
};
