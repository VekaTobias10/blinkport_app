import React from "react";
import PaperContainer from "../../styles/classes-hooks";
import "./styles.css";
import teleportIcon from "../../assets/img/teleportIcon.png";
import maleta from "../../assets/img/maleta.png";
import world from "../../assets/img/world.png";
import location from "../../assets/img/location.png";

function InfoCards() {
  return (
    <React.Fragment>
      <div className="container">
        <PaperContainer
          icon={teleportIcon}
          text="Travel alone or in group to any place of the globe, safely and in
            the blink of an eye with highest technology in Teleportation."
        ></PaperContainer>
        <PaperContainer
          icon={maleta}
          text="We treat any package with exclusive care to assure it gets intact to the arribal point. 
        Atomic degradation might happen."
        ></PaperContainer>
        <PaperContainer
          icon={location}
          text="You can trust your beloved partners to our care. They will be waiting for you at the destiny point eager for a new exotic walk!."
        ></PaperContainer>
        <PaperContainer
          icon={world}
          text="Explore entire Earth. Choose any country on the planet to expand your boundaries until they are no more. Walk all ways"
        ></PaperContainer>
      </div>
    </React.Fragment>
  );
}

export default InfoCards;
