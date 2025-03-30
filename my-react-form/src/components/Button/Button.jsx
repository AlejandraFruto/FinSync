import React from "react";
import "./style.css";

export const Button = ({
  className,
  buttonClassName,
  text = "BUTTON",
  link, // Accept link as a prop
}) => {
  return link ? (
    <a href={link} className={`button ${className}`} target="_blank" rel="noopener noreferrer">
      <span className={`text-wrapper-55 ${buttonClassName}`}>{text}</span>
    </a>
  ) : (
    <button className={`button ${className}`}>
      <span className={`text-wrapper-55 ${buttonClassName}`}>{text}</span>
    </button>
  );
};
