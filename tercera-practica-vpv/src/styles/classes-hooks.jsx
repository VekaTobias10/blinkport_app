import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import ButtonStyle from "./button-hook";

const useStyles = makeStyles({
  paperContainer: {
    background: "#FFFFFF",
    borderRadius: "16px",
    boxShadow: "2px 2px 30px rgba(83, 83, 83, 0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 16px",
    width: "280px",
    height: "292px",
    marginLeft: "48px",
  },
  textInside: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.8px",
  },
});

export default function PaperContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paperContainer}>
        <img src={props.icon} alt="icono" />
        <p className={classes.textInside}>{props.text}</p>
        <ButtonStyle text="MORE INFORMATION"></ButtonStyle>
      </Paper>
    </React.Fragment>
  );
}
