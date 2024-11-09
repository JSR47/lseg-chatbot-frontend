import React from "react";
import chatbotLogo from "../chatbot-icon.svg";
import paperPlane from "../paper-plane-icon.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar dark-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={chatbotLogo}
              alt="Logo"
              width="50"
              height="30"
              class="d-inline-block align-text-top"
            />
            LSEG Chatbot
          </a>
        </div>
      </nav>

      <nav
        className="navbar light-navbar fixed-bottom"
        style={{ height: "50px", width: "1920px", position : "absolute", top : "1000px", right : "100px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={paperPlane}
              alt="Logo"
              width="50"
              height="25"
              class="d-inline-block align-text-center"
            />
            Please select an option
          </a>
        </div>
      </nav>
    </div>
  );
}
