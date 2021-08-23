import React from 'react';
import { useStyles } from "./style.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


  export default function FooterLanding() {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('');
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };


    return (
      <React.Fragment>
      <footer>
        <div>
          <h4>LEGAL</h4>
          <ol>
            <li>TERMS</li>
            <li>PRIVACY</li>
            <li>CONTACT</li>
          </ol>
        </div>
         <h4>LANGUAGE</h4>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={language}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={language}>English</MenuItem>
          <MenuItem value={language}>Spanish</MenuItem>
          <MenuItem value={language}>French</MenuItem>
        </Select>
      </FormControl>
        <div></div>
      </footer>
      </React.Fragment>
    );
  }

