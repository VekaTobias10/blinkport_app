import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './style.js';
import imgmove from '../../assets/img-gif/imgmove.gif';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css'


function PersonalData() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="personal-data_bigcontainer">
            <div className="personal-data_input-titelcontainer">
                <h3 className="data_titel">Personal Data</h3>
                <div className="input_container">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            className={classes.inputData}
                            required
                            id="outlined-required"
                            label="First Name"
                            // defaultValue="First Name"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.inputData}
                            required
                            id="outlined-required"
                            label="Last Name"
                            // defaultValue="Last Name"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.inputData}
                            required
                            id="outlined-required"
                            label="NIE/NIF"
                            // defaultValue="NIE/NIF"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.inputData}
                            required
                            id="date"
                            label="Birthday"
                            type="date"
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
                            // defaultValue="Adress"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.bigInputData}
                            required
                            id="outlined-required"
                            label="Email Address"
                            // defaultValue="Email Adress"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.bigInputData}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </form>
                </div>
                <div className="check-box">
                    <Checkbox
                        className={classes.checkBoxElement}
                        checked={checked}
                        onChange={handleChange}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p className="text_check-box_top">I am +18 years old and I read the Terms and Conditions</p>
                </div>
                <div className="check-box">
                    <Checkbox
                        className={classes.checkBoxElement}
                        checked={checked}
                        onChange={handleChange}
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p className="text_check-box">I want to receive inspiration, marketing promotions and update via email</p>
                </div>

            </div>
            <div className="img_container-personal">
                <img className="img-gifmoving" src={imgmove} alt="logo-movimiento" />
            </div>
        </div>
    )
}
export default PersonalData;