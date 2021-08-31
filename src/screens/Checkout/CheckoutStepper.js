import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {CheckoutStyle} from './CheckoutStyle.js';
import {checkoutSteps} from './checkoutSteps.js';

const useStyle = makeStyles((theme) => CheckoutStyle(theme));

export const CheckoutStepper = ({actualStep}) => {
    
    const classes = useStyle();

    return <Stepper activeStep={actualStep} className={classes.stepper}>
      {checkoutSteps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.name}</StepLabel>
        </Step>
      ))}
    </Stepper>
}

