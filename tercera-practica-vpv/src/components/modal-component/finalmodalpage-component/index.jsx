import React from 'react';
import imgmove2 from '../../../assets/img-gif/imgmove.gif';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './style.css';

function LastPageModal (){
    return(
      <React.Fragment>
          <div className="main-container-registration">
          <div className="msg-registration">
          <CheckCircleIcon className="icon-modal-reg" color="primary" style={{ fontSize: 50 }} ></CheckCircleIcon>
          <p>Your registration has been successful</p>
          <p>Thanks for trusting us. Your next adventure awaits.</p>
          </div>
          <div className="container-registration">
              <img className="moving-gif" src={imgmove2} alt="gifmoving"/>
          </div>
          </div>
      </React.Fragment>
    );
}


export default LastPageModal;
