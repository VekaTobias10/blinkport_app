import React from "react";
import PaperContainer from "../../styles/classes-hooks";
import { useStyles } from './styles.js';
import teleportIcon from "../../assets/img/teleportIcon.png";
import maleta from "../../assets/img/maleta.png";
import world from "../../assets/img/world.png";
import location from "../../assets/img/location.png";

function InfoCards() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <PaperContainer
          icon={teleportIcon}
          classname={classes.cardPaperContainer}
          text="Travel alone or in group to any place of the globe, safely and in
            the blink of an eye with highest technology in Teleportation."
        ></PaperContainer>
        <PaperContainer
         classname={classes.cardPaperContainer}
          icon={maleta}
          text="We treat any package with exclusive care to assure it gets intact to the arribal point. 
        Atomic degradation might happen."
        ></PaperContainer>
        <PaperContainer
         classname={classes.cardPaperContainer}
          icon={location}
          text="You can trust your beloved partners to our care. They will be waiting for you at the destiny point eager for a new exotic walk!."
        ></PaperContainer>
        <PaperContainer
         classname={classes.cardPaperContainer}
          icon={world}
          text="Explore entire Earth. Choose any country on the planet to expand your boundaries until they are no more. Walk all ways"
        ></PaperContainer>
      </div>
    </React.Fragment>
  );
}

export default InfoCards;
