import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core/";
import Select from "@material-ui/core/Select";
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
            margin: 0,
            backgroundImage: `url(${banks})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",

            marginBottom: 30,
          }}
          placeholder="XXXX XXXX XX XXXXXXXXXX"
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
        <div className="formInputs">
          <Select
            labelId="country"
            id="country"
            value={country}
            onChange={handleChange}
            label="Select a country"
            className="selectClass"
            variant="outlined"
          >
            <MenuItem value="" select="selected">
              Select a country
            </MenuItem>
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
