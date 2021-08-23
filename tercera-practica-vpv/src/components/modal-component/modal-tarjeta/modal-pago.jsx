import React, {useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles.js';


export default function PaymentCard() {
 
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <React.Fragment>
      <div>
        {/* <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    
        {/* <span> Expiry </span> */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="MM/YY" />
        <span> CVC </span>
        <TextField id="outlined-basic" label="Outlined" variant="MM/YY" /> 
   */}
      
      <FormControl variant="outlined" className={classes.formControl}>
<InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
<Select
    labelId="country"
    id="country"
    value={country}
    onChange={handleChange}
    label="Country"
>
<MenuItem value="">
         
            </MenuItem>
            <MenuItem value={country}>Spain</MenuItem>
            <MenuItem value={country}>
              United States of America
            </MenuItem>
            <MenuItem value={country}>Mexico</MenuItem>
            <MenuItem value={country}>Argentina</MenuItem>
            <MenuItem value={country}>Colombia</MenuItem>
            <MenuItem value={country}>Germany</MenuItem>
            <MenuItem value={country}>Venezuela</MenuItem>
            <MenuItem value={country}>Czech Republic</MenuItem>
            <MenuItem value={country}>Peru</MenuItem>
            <MenuItem value={country}>France</MenuItem>
            <MenuItem value={country}>Brazil</MenuItem>
            <MenuItem value={country}>China</MenuItem>
</Select>
</FormControl>
        {/* <span> CVC </span>
        <TextField id="outlined-basic" label="Outlined" variant="Postal Code" /> */}
      </div>
    </React.Fragment>
  );
}

