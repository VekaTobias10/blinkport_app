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
      <footer className={classes.mainContainer}>
        <div className={classes.boxFooter}>
        <div className={classes.legalContainer}>
          <h4>LEGAL</h4>
            <p>TERMS</p>
            <p>PRIVACY</p>
            <p>CONTACT</p>
          </div>
        <div className={classes.languageContainer}>
         <h4>LANGUAGE</h4>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">English</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={language}
          onChange={handleChange}
          // label="English"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={language}>English</MenuItem>
          <MenuItem value={language}>Spanish</MenuItem>
          <MenuItem value={language}>French</MenuItem>
        </Select>
      </FormControl>
       </div>
       </div>
      </footer>
      </React.Fragment>
    );
  }

