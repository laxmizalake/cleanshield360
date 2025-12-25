import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css"; // global CSS (variables + base)
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/lower.css";
import "./styles/loginmodal.css";
import "./styles/footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
