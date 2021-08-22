import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./style.js";
import "../price-section/price-style2.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";



export default function PriceCardComponentStepper() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
      <div className={classes.containerMainCards}>
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">Free</Typography>
            <Typography variant="h6">
              <span className="price-number">$0</span>
              <span className="month-text">/Month</span>
            </Typography>
            <div className="text-container-description">
              <Typography variant="p" className="text-description-card">
                Totally free
              </Typography>
            </div>
            <div className="container-lit-check">
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Continental reach</div>
              </Typography>
          
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Discounts avaliable</div>
              </Typography>
     
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Half / Free Package</div>
              </Typography>

              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Small pets Included</div>
              </Typography>
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">Custom</Typography>
            <Typography variant="h6">
              <span className="price-number">$500</span>
              <span className="month-text">/Month</span>
            </Typography>
            <div className="text-container-description">
              <Typography variant="p" className="text-description-card">
                The costumized plan we craft to fit all your needs.
              </Typography>
            </div>
            <div className="container-lit-check">
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Unlimited reach</div>
              </Typography>
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Lux Discount Card</div>
              </Typography>
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Full Free Package </div>
              </Typography>
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Package Insurance</div>
              </Typography>
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">Platinum</Typography>
            <Typography variant="h6">
              <span className="price-number">$900</span>
              <span className="month-text">/Month</span>
            </Typography>
            <div className="text-container-description">
              <Typography variant="p" className="text-description-card">
              The top experience for those who understand life as a real, actual, impressive journey. 
              </Typography>
            </div>
    
            <div className="container-lit-check">
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                National reach</div>
              </Typography>
             
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Instalations Tour</div>
              </Typography>
         
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                One Free Handbag</div>
              </Typography>
        
              <Typography variant="p">
                <div className="container-item-list"><CheckCircleOutlineIcon className="icon-checkCircle" />
                Local Tourism Guide</div>
              </Typography>
        
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>
      </div>
      </div>
      </React.Fragment>
 );

}