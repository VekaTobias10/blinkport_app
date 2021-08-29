import "./styles.css";
import React from "react";
import InfoCards from "../../info-cards";
import TitleOfSections from "../../titles/title";
import { LocationOn, DateRange, PeopleAlt, Search } from "@material-ui/icons";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./styles.js";

function ImageSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="img row">
        <div className="text-img">
          <p>All you need is Blinkport</p>
          <h1>Teleport To Beautiful Places</h1>
        </div>
        <div className="reservation-container">
          <div className="reservation-little-containers">
            <LocationOn className={classes.icon}></LocationOn>
            <p className="reservation-little-title">Where</p>
            <TextField
              size="small"
              className={classes.input}
              id="standard-basic"
              placeholder="Where do you want to go"
            />
          </div>
          <div className="reservation-little-containers">
            <DateRange className={classes.icon}></DateRange>
            <p className="reservation-little-title">When</p>
            <TextField
              className={classes.input}
              required
              id="travel-date"
              placeholder="Choose date"
              type="date"
              min="2021-08-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="reservation-little-containers noBorder">
            <PeopleAlt className={classes.icon}></PeopleAlt>
            <p className="reservation-little-title">Who</p>
            <TextField
              size="small"
              className={classes.input}
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </div>
          <Button className={classes.button}>
            <Search />
          </Button>
        </div>
      </div>
      {/* <div className="row"> */}
      <TitleOfSections
        title="From A to B in 0"
        text="Travel wherever, whenever, whoever with. In seconds."
      ></TitleOfSections>
      <InfoCards></InfoCards>
      {/* </div> */}
    </React.Fragment>
  );
}

export default ImageSection;
