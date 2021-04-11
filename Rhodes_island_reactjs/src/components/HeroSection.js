import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/intro.mp4" autoPlay loop muted></video>
      <h1></h1>
      <h1>Welcome To The Ark</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          PREPARATION
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn--large"
        >
          BEGIN OPERATION <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
