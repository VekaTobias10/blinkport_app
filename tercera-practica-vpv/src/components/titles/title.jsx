import React from "react";
import "./styles.css";
import Line1 from "../../assets/img/Line1.png";

function TitleOfSections() {
  return (
    <React.Fragment>
      <div className="title-container">
        <h2 className="title-font">
          <img className="line-title" src={Line1} alt="lineImage" />
          From A to B in 0
        </h2>
        <p className="sub-title">
          Travel wherever, whenever, whoever with. In seconds.
        </p>
      </div>
    </React.Fragment>
  );
}

export default TitleOfSections;
