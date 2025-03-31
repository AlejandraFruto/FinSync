import React from "react";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Page Not Found</h2>
      <p className="error-description">
        This page is not available for the moment. <br />
        Come back in a few days to check the new information.
      </p>
    </div>
  );
};

export default NotFound;
