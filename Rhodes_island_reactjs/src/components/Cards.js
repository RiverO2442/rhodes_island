import operator from "../images/operator.jfif";
import operation from "../images/operation.jpg";
import organizaiton from "../images/Organizations.jpg";
import oripathy from "../images/oripathy.png";
import supply from "../images/Supplies.png";
import recruitment from "../images/recruitment2.jfif";
import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>MORE INFORMATION</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={operator}
              text="Operator Infomation"
              label="Access level 2"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={operation}
              text="Operation Infomation"
              label="Access level 2"
              path="/services"
            />
            <CardItem
              src={organizaiton}
              text="Organization Infomation"
              label="Access level 1"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={oripathy}
              text="Oripathy research"
              label="Access level 0"
              path="/services"
            />
            <CardItem
              src={supply}
              text="Supply trading network"
              label="Access level 0"
              path="/services"
            />
            <CardItem
              src={recruitment}
              text="Recruitment intruction"
              label="Access level 0"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
