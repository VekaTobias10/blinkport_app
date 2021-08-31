import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import imgmove from "../../../assets/img-gif/imgmove.gif";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";
import { useRef } from "react";

function PersonalData() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nieRef = useRef();
  const birthdayRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
      nie: e.target[4].value,
      birthday: e.target[6].value,
      address: e.target[8].value,
      email: e.target[10].value,
      password: e.target[12].value,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(user);

    fetch("http://localhost:5055/user/register", options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });

    console.log(user);
  };

  return (
    <div className={classes.personalDataBigcontainer}>
      <div className={classes.personalDataInputTitelcontainer}>
        <h3 className="data_titel">Personal Data</h3>
        <div className="input_container">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              className={classes.inputData}
              required
              id="outlined-required"
              label="First Name"
              ref={firstNameRef}
              // defaultValue="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              id="outlined-required"
              label="Last Name"
              ref={lastNameRef}
              // defaultValue="Last Name"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              id="outlined-required"
              label="NIE/NIF"
              ref={nieRef}
              // defaultValue="NIE/NIF"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              id="date"
              label="Birthday"
              type="date"
              ref={birthdayRef}
              defaultValue="Birth Date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              required
              id="outlined-required"
              label="Address"
              ref={addressRef}
              // defaultValue="Adress"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              required
              id="outlined-required"
              label="Email Address"
              ref={emailRef}
              // defaultValue="Email Adress"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              id="outlined-password-input"
              label="Password"
              type="password"
              ref={passwordRef}
              autoComplete="current-password"
              variant="outlined"
            />
            <input type="submit" value="" className={classes.inputOculto}></input>
          </form>
        </div>
        <div className="check-box">
          <Checkbox
            className={classes.checkBoxElement}
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p className="text_check-box_top">
            I am +18 years old and I read the Terms and Conditions
          </p>
        </div>
        <div className="check-box">
          <Checkbox
            className={classes.checkBoxElement}
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p className="text_check-box">
            I want to receive inspiration, marketing promotions and update via
            email
          </p>
        </div>
      </div>
      <div className={classes.imgContainerPersonal}>
        <img className="img-gifmoving" src={imgmove} alt="logo-movimiento" />
      </div>
    </div>
  );
}
export default PersonalData;
