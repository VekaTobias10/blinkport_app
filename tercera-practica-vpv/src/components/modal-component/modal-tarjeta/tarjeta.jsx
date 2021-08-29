import React, { useState } from "react";
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles.js";
import banks from "../../../assets/img/banks.png";

export default function PaymentCard() {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
    console.log(country);
  };

  return (
    <React.Fragment>
      <div>
        <TextField
          id="outlined-full-width"
          label="Creadit Card"
          style={{
            backgroundImage: `url(${banks})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "98% center",
            margin: "1rem 0px",
          }}
          placeholder="XXXX XXXX XX XXXXXXXXXX"
          helperText=""
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <div className="formInputs">
          <TextField
            className={classes.inputData}
            required
            pattern="[0-9]{4}-[0-9]{2}"
            id="expire-date"
            label="Date of expiration"
            placeholder="YYYY-MM"
            /*defaultValue="2021-08"*/
            type="month"
            min="2021-08"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="CVC"
            type="number"
            variant="outlined"
          />
        </div>
        {/*<InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>*/}
        <div className="formInputs">
          <Select
            labelId="country"
            id="country"
            className="selClass"
            value={country}
            onChange={handleChange}
            variant="outlined"
            placeholder="Select a country"
            label="Select a country"
          >
            <MenuItem value="">Select a country</MenuItem>
            <MenuItem value={"Spain"}>Spain</MenuItem>
            <MenuItem value={"USA"}>United States of America</MenuItem>
            <MenuItem value={"Mexico"}>Mexico</MenuItem>
            <MenuItem value={"Argentina"}>Argentina</MenuItem>
            <MenuItem value={"Colombia"}>Colombia</MenuItem>
            <MenuItem value={"Germany"}>Germany</MenuItem>
            <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
            <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
            <MenuItem value={"Peru"}>Peru</MenuItem>
            <MenuItem value={"France"}>France</MenuItem>
            <MenuItem value={"Brazil"}>Brazil</MenuItem>
            <MenuItem value={"China"}>China</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            type="number"
            label="Postal Code"
            variant="outlined"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
