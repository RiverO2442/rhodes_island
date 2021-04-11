import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Together We Create A Better Wolrd.
        </p>
        <p className="footer-subscription-text">Let us know who you are.</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="Code Name"
              type="text"
              placeholder="Your Code Name"
            />
            <Button buttonStyle="btn--outline">Send to network</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
