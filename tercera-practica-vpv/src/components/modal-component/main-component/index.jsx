import React from "react";
import { useStyles } from "./style.js";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PriceCardComponentStepper from "../../price-component-container/card-component-stepper/card-component-stepper";
import PersonalData from "../personal-data";
import PaymentOptions from "../modal-tarjeta/payment-section";
import LastPageModal from "../finalmodalpage-component";
import LandingPage from "../../../pages/landing";
import logo from "../../../assets/img/Logo.png";
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down('sm')]: {
      width: "fit-content",
    },
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#BBDEFB",
    color: "white",
    width: '29%',
    marginLeft: '12rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1rem',
      marginTop:"10rem",
      width: '90%',
    },
  },
  btnSkip: {
    display: 'none'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps() {
  return ["Personal Data", "Subscription Plan", "Payment details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalData></PersonalData>;
    case 1:
      return <PriceCardComponentStepper></PriceCardComponentStepper>;
    case 2:
      return <PaymentOptions></PaymentOptions>;
    default:
      return <LandingPage></LandingPage>;
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const { push } = useHistory()
  return (

    <React.Fragment>
       <nav className={`${classes.navContainerModal} ${classes.navContainerModalTwo}`}>
        <div>
          <img src={logo} className={classes.webLogoModal} alt="logo" />
        </div>
        <ul className={classes.servicesBarModal}>
          <li className={classes.liModal}>SERVICES</li>
          <li className={classes.liModal}>ABOUT</li>
          <li className={classes.liModal}>CONTACT</li>
        </ul>
        <div>
          <button className={classes.accessBtnModal}>ACCESS</button>
          <ViewHeadlineOutlinedIcon className={classes.viewIcon}></ViewHeadlineOutlinedIcon>
        </div>
      </nav>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            <div>
              <LastPageModal></LastPageModal>
            </div>
            <Button onClick={() => push('/')} className={classes.button}>
              Home
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              {isStepOptional(activeStep) && (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={`${classes.button}`}
                >
                  Back
                </Button>
              )}

              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  onClick={handleSkip}
                  className={`${classes.button} ${classes.btnSkip}`}
                >
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
