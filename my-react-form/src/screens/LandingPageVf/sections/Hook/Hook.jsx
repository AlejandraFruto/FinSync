import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Hook = () => {
  return (
    <div className="hook">
      <div className="overlap-9">
        <p className="text-wrapper-52">
          Optimize your accounting records without complications
        </p>

        <p className="text-wrapper-53">
          Focus on the business, leave us the numbers.
        </p>

        <div className="overlap-10">
          <div className="button-wrapper">
            <Button
              className="button-7"
              property1="default"
              text="TRY IT NOW"
            />
          </div>

          <img
            className="investment-data-bro"
            alt="Investment data bro"
            src="https://c.animaapp.com/W9MUR0Mj/img/investment-data-bro--1--1.png"
          />
        </div>
      </div>
    </div>
  );
};
