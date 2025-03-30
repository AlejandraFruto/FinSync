import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPageVf } from "./screens/LandingPageVf";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LandingPageVf />
  </StrictMode>,
);

