import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {CheckoutStyle} from './CheckoutStyle.js'
import {Resume} from './ResumeStep/Resume.js'
import {checkoutSteps} from './checkoutSteps.js';
import {CheckoutStepper} from './CheckoutStepper.js';
import {CheckoutStepsController} from './CheckoutStepsController.js';

const useStyle = makeStyles((theme) => CheckoutStyle(theme));

export const Checkout = () => {

  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return <section className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <CheckoutStepper actualStep={activeStep}/>
          <>
            {activeStep === checkoutSteps.length ? 
            (<Resume/>) 
            : 
            (<>
              {checkoutSteps[activeStep].content}
              <CheckoutStepsController currentStep={activeStep} onBack={handleBack} onNext={handleNext}/> 
            </>)}
          </>
        </Paper>
      </section>
}






