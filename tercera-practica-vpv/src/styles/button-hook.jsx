import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#BBDEFB",
    color: "white",
    borderRadius: "16px",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
  },
});
export default function ButtonStyle(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button className={classes.button}>{props.text}</Button>
    </React.Fragment>
  );
}
