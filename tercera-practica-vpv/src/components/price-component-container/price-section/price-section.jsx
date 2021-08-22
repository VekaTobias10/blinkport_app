import React from "react";
import Line1 from "../../../assets/img/Line1.png";
import {
  CardMedia,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { useStyles } from "../card-component/style.js";
import "./price-style2.css";
import PriceCardComponent from '../card-component/card-component';

export default function PriceCardLanding() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <CardMedia
            component="img"
            src={Line1}
            className={classes.media}
          ></CardMedia>
          <Typography variant="h2" color="inherit">
            From A to B in 0
          </Typography>
        </div>
        <Typography variant="h5" color="inherit">
          Travel wherever, whenever, whoever with. In seconds.
        </Typography>
      </div>
      <PriceCardComponent></PriceCardComponent>
    </React.Fragment>
  );
}
