import "./styles.css";
import React from "react";
import InfoCards from "../../info-cards";
import TitleOfSections from "../../titles/title";

function ImageSection() {
  return (
    <React.Fragment>
      <div className="img row">
        <div className="text-img">
          <p>All you need is Blinkport</p>
          <h1>Teleport To Beautiful Places</h1>
        </div>
        <div className="reservation-container"></div>
      </div>
      <div className="row">
        <TitleOfSections></TitleOfSections>
        <InfoCards></InfoCards>
      </div>
    </React.Fragment>
  );
}

export default ImageSection;
