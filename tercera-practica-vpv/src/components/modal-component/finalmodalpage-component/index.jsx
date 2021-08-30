import React from 'react';
import imgmove2 from '../../../assets/img-gif/imgmove.gif';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './style.css';
import { useStyles } from './style.js';

function LastPageModal (){
    const classes = useStyles();
    return(
      <React.Fragment>
          <div className={classes.mainContainerRegistration}>
          <div className={classes.msgRegistration}>
          <CheckCircleIcon className={classes.iconModalReg} style={{ fontSize: 50 }} ></CheckCircleIcon>
          <p className={classes.iconModalReg}>Your registration has been successful</p>
          <p className={classes.subRegText}>Thanks for trusting us. Your next adventure awaits.</p>
          </div>
          <div className={classes.containerRegistration}>
              <img className="moving-gif" src={imgmove2} alt="gifmoving"/>
          </div>
          </div>
      </React.Fragment>
    );
}


export default LastPageModal;
