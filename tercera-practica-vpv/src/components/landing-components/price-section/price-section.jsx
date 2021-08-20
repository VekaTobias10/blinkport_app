import React from 'react';
import Line1 from '../../../assets/img/Line1.png';
import { Card, CardMedia, CardContent, Typography, CssBaseline} from '@material-ui/core';
import { useStyles } from "./price-style.js";
import './price-style2.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


export default function PriceCardLanding (){
    const classes = useStyles();

    return (
     <React.Fragment>
     <CssBaseline />
        <div className={classes.titleContainer}>
        <div className={classes.title}>
        <CardMedia component="img" src={Line1} className={classes.media}></CardMedia>
        <Typography variant="h2" color="inherit">From A to B in 0</Typography>
        </div>
        <Typography variant="h5" color="inherit">
        Travel wherever, whenever, whoever with. In seconds.
        </Typography>
        </div>
       <div className="container-main-cards">
       <div className="card card-one">
      <Card className={classes.root}>       
          <CardContent>
           <Typography variant="h4">Free</Typography>
          <Typography variant="h6">$0/Month</Typography>
          </CardContent>
           <CardContent>
        <Typography variant="p">Totally free</Typography>
          </CardContent>
          <CardContent>
           <CheckCircleOutlineIcon/><Typography variant="p">National reach</Typography>
           <CheckCircleOutlineIcon/><Typography variant="p">Instalations Tour</Typography>
           <CheckCircleOutlineIcon/><Typography variant="p">One Free Handbag</Typography>
           <CheckCircleOutlineIcon/><Typography variant="p">Local Tourism Guide</Typography>
          </CardContent>
      </Card>
      </div>
       <div className="card card-one">
       <Card className={classes.root}>
          <CardContent>
        <Typography variant="h4">Free</Typography>
         <Typography variant="h6">$500/Month</Typography>
          </CardContent>
        <CardContent>
        <Typography variant="p">The costumized plan we craft to fit all your needs. </Typography>
          </CardContent>
      </Card>
 </div>
       <div className="card card-one">
       <Card className={classes.root}>
          <CardContent>
        <Typography variant="h4">Free</Typography>
         <Typography variant="h6">$900/Month</Typography>
          </CardContent>
        <CardContent>
        <Typography variant="p">The top experience for those who understand life as a real, actual, impressive journey.</Typography>
          </CardContent>
      </Card>
       </div>
      </div>
     </React.Fragment>
    );
}

