import React from "react";
import Line1 from "../../../assets/img/Line1.png";
import { CardMedia, Typography, CssBaseline } from "@material-ui/core";
import { useStyles } from "./style.js";
import PriceCardComponent from "../card-component/card-component";

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
          <Typography className={classes.subtitle_cont_card} variant="h2" color="inherit">
            From A to B in 0
          </Typography>
        </div>
        <Typography className={classes.subtitle_desc_card} variant="h5" color="inherit">
          Travel wherever, whenever, whoever with. In seconds.
        </Typography>
      </div>
      <PriceCardComponent></PriceCardComponent>
    </React.Fragment>
  );
}
