import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {CheckoutStyle} from './CheckoutStyle.js'
import {checkoutSteps} from './checkoutSteps.js';

const useStyle = makeStyles((theme) => CheckoutStyle(theme));

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


