import React from "react";
import { Button } from "../../../../components/Button";
import "./style.css";

export const Pricing = () => {
  return (
    <div className="pricing">
      <div className="overlap">
        <div className="div-wrapper">
          <div className="text-wrapper-4">Medium business version</div>
        </div>

        <div className="text-wrapper-5">Pricing</div>

        <p className="p">Choose the plan that best fits your business.</p>
      </div>

      <div className="div-5">
        <div className="text-wrapper-6">Small business version</div>
      </div>

      <div className="overlap-group">
        <div className="div-6">
          <div className="text-wrapper-7">Feature 1</div>

          <div className="div-7" />

          <div className="div-8" />
        </div>

        <div className="div-9">
          <div className="text-wrapper-8">Feature 2</div>

          <div className="div-10" />

          <div className="div-11" />
        </div>

        <div className="div-12">
          <div className="text-wrapper-9">Feature 3</div>

          <div className="div-10" />

          <div className="div-11" />
        </div>

        <div className="div-13">
          <div className="text-wrapper-10">Feature 4</div>

          <div className="div-10" />

          <div className="div-11" />
        </div>

        <div className="div-14">
          <div className="text-wrapper-11">Feature 5</div>

          <div className="div-10" />

          <div className="div-15" />
        </div>

        <div className="div-16">
          <div className="text-wrapper-12">Feature 6</div>

          <div className="div-10" />

          <div className="div-15" />
        </div>

        <div className="div-17">
          <div className="text-wrapper-13">Cost per year</div>

          <p className="x-year">
            <span className="span">$X</span>

            <span className="text-wrapper-14"> /year</span>
          </p>

          <p className="x-year-2">
            <span className="span">$X</span>

            <span className="text-wrapper-15">&nbsp;</span>

            <span className="text-wrapper-14">/year</span>
          </p>
        </div>

        <div className="div-18">
          <Button
            buttonClassName="button-instance"
            className="button-1"
            property1="default"
            text="PAY NOW"
          />
          <Button
            buttonClassName="button-instance"
            className="button-1-instance"
            property1="default"
            text="PAY NOW"
          />
        </div>
      </div>
    </div>
  );
};
