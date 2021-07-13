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
import {ShippingFormContainer} from './ShippingForm';
import {ContactFormContainer} from './ContactForm';
import {PaymentContainer} from './Payment.js';
import {OrderResume} from './Resume.js';
import {CheckoutStyle} from './CheckoutStyle.js'
import {Order} from './Order.js'
import {OrderService} from './OrderService.js'


const useStyle = makeStyles((theme) => CheckoutStyle(theme));

const actualDate =  new Date().getFullYear();

const checkoutSteps =[
    {
        name: 'Contacto',
        id: 0,
        content: <ContactFormContainer />
    },
    {
        name: 'Delivery',
        id: 1,
        content: <ShippingFormContainer />
    },
    {
        name: 'Pago',
        id: 2,
        content: <PaymentContainer />
    },
    {
      name: 'Confirma',
      id: 3,
      content:<OrderService/>
    },
    /*
    {
      name: 'Resumen',
      id: 4,
      content: <OrderResume />
    }
    */
];




export const CheckoutStepsController = ({currentStep, onBack, onNext}) => {
    
    const classes = useStyle();

    return (
        <>
        <div className={classes.buttons}>
          {currentStep !== 0 && (
            <Button onClick={onBack} className={classes.button}>
            Atrás  
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={onNext}
            className={classes.button}
          >
            {currentStep === checkoutSteps.length - 1 ? 'Listo!' : 'Siguiente'}
          </Button>
        </div>
        </>
    )
}

export const CheckoutStepper = ({actualStep}) => {
    
    const classes = useStyle();

    return <Stepper activeStep={actualStep} className={classes.stepper}>
      {checkoutSteps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.name}</StepLabel>
        </Step>
      ))}
    </Stepper>
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
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <CheckoutStepper actualStep={activeStep}/>
          <>
            {activeStep === checkoutSteps.length ? 
            (<Order/>) 
            : 
            (<>
              {checkoutSteps[activeStep].content}
              <CheckoutStepsController currentStep={activeStep} onBack={handleBack} onNext={handleNext}/> 
            </>)}
          </>
        </Paper>
      </main>
    </>
  );
}






