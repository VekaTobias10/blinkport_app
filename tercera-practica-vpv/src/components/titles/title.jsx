import React from "react";
import "./styles.css";
import Line1 from "../../assets/img/Line1.png";
import useStyles from "./styles.js";
import { CardMedia, Typography, CssBaseline } from "@material-ui/core";

function TitleOfSections(props) {
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
          <Typography
            className={classes.subtitle_cont_card}
            variant="h2"
            color="inherit"
          >
            {props.title}
          </Typography>
        </div>
        <Typography
          className={classes.subtitle_desc_card}
          variant="h5"
          color="inherit"
        >
          {props.text}
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default TitleOfSections;
