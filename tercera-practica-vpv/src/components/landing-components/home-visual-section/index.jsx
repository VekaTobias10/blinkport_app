import "./styles.css";
import React from "react";
import InfoCards from "../../info-cards";
import TitleOfSections from "../../titles/title";
import { LocationOn, DateRange, PeopleAlt } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

function ImageSection() {
  return (
    <React.Fragment>
      <div className="img row">
        <div className="text-img">
          <p>All you need is Blinkport</p>
          <h1>Teleport To Beautiful Places</h1>
        </div>
        <div className="reservation-container">
          <div>
            <LocationOn></LocationOn>
            <p>Where</p>
            <TextField id="standard-basic" label="Where do you want to go" />
          </div>
          <div>
            <DateRange></DateRange>
            <p>When</p>
          </div>
          <div>
            <PeopleAlt></PeopleAlt>
            <p>Who</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            ></TextField>
          </div>
        </div>
      </div>
      {/* <div className="row"> */}
      <TitleOfSections></TitleOfSections>
      <InfoCards></InfoCards>
      {/* </div> */}
    </React.Fragment>
  );
}

export default ImageSection;
