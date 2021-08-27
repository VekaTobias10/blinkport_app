import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style.js";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export default function PriceCardComponentStepper() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.containerMainCards}>
        {/* <div className={classes.card}> */}
        <Card className={classes.root}>
          {/* <Card> */}
          <CardContent>
            <Typography variant="h4">Free</Typography>
            <Typography variant="h6">
              <span className={classes.priceNumber}>$0</span>
              <span className={classes.monthText}>/Month</span>
            </Typography>
            <div className={classes.textContainerDescription}>
              <Typography variant="p" className={classes.textDescriptionCard}>
                Totally free
              </Typography>
            </div>
            <div className="container-lit-check">
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Continental reach
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Discounts avaliable
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Half / Free Package
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Small pets Included
                </div>
              </Typography>
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>

        {/* <div className={classes.card}> */}
        <Card className={classes.root}>
          {/* <Card> */}
          <CardContent>
            <Typography variant="h4">Custom</Typography>
            <Typography variant="h6">
              <span className={classes.priceNumber}>$500</span>
              <span className={classes.monthText}>/Month</span>
            </Typography>
            <div className={classes.textContainerDescription}>
              <Typography variant="p" className={classes.textDescriptionCard}>
                The costumized plan we craft to fit all your needs.
              </Typography>
            </div>
            <div className="container-lit-check">
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Unlimited reach
                </div>
              </Typography>
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Lux Discount Card
                </div>
              </Typography>
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Full Free Package{" "}
                </div>
              </Typography>
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Package Insurance
                </div>
              </Typography>
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>
        {/* <div className={classes.card}>  */}
        {/* <Card> */}
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">Platinum</Typography>
            <Typography variant="h6">
              <span className={classes.priceNumber}>$900</span>
              <span className={classes.monthText}>/Month</span>
            </Typography>
            <div className={classes.textContainerDescription}>
              <Typography variant="p" className={classes.textDescriptionCard}>
                The top experience for those who understand life as a real,
                actual, impressive journey.
              </Typography>
            </div>

            <div className="container-lit-check">
              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  National reach
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Instalations Tour
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  One Free Handbag
                </div>
              </Typography>

              <Typography variant="p">
                <div className={classes.containerItemList}>
                  <CheckCircleOutlineIcon className={classes.iconCheckCircle} />
                  Local Tourism Guide
                </div>
              </Typography>
            </div>
            <Button className={classes.buttonPrices} variant="contained">
              CHOOSE PLAN
            </Button>
          </CardContent>
        </Card>
      </div>
      {/* </div> */}
    </React.Fragment>

    /* {/* </div> */
  );
}
