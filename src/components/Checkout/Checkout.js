import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {CheckoutForm} from './CheckoutForm';
import {Payment} from './Payment.js';
import {OrderView} from './OrderView.js';
import {CheckoutStyle} from './CheckoutStyle.js'

const useStyle = makeStyles((theme) => CheckoutStyle(theme));

const actualDate =  new Date().getFullYear();




const steps = ['Shipping address', 'Payment details', 'Review your order'];

const checkoutSteps =[
    {
        name: 'Shipping',
        id: 0,
        content: <CheckoutForm />
    },
    {
        name: 'Payment',
        id: 1,
        content: <Payment />
    },
    {
        name: 'Review',
        id: 2,
        content: <OrderView />
    }
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CheckoutForm />;
    case 1:
      return <Payment />;
    case 2:
      return <OrderView />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <Order/>
              ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}





export const Order = ({orderNumber}) => {
    
    if (orderNumber !== undefined && orderNumber !== null) {

     }

    return <>
        <Typography variant="h5" gutterBottom>
        Gracias por tu órden!
        </Typography>
        <Typography variant="subtitle1">
        Tu número de órden es: {`#${orderNumber}`}.
        Te enviaremos al mail brindado la confirmación y los detalles de 
        tu compra.
        </Typography>
        <Typography variant="subtitle1">
        Te enviaremos al mail brindado la confirmación y los detalles de 
        tu compra.
        </Typography>
  </>
}



export const CheckoutStepsController = () => {
    
    const classes = useStyle();

    const activeStep = 0;
    const handleBack= 0;
    const handleNext= 0;

    return (
        <>
        {getStepContent(activeStep)}
        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
          </Button>
        </div>
        </>
    )
}

export const CheckoutStepper = () => {
    
    const classes = useStyle();

    const activeStep= 0;
    const steps=0;
    return (
        <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
        <Step key={label}>
            <StepLabel>{label}</StepLabel>
        </Step>
        ))}
        </Stepper>
        )

}




