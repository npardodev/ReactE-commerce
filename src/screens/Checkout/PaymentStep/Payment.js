import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { OrderContext } from './../../../Context/OrderContext/OrderContext.js'

export const Payment =  ({paymentMethod})  => {
  
  const [finishElect, setFinishElect] = useState(false);
  const {saveOrderPayment} = useContext(OrderContext);

  const onClickHandler = (e) => {
      e.preventDefault();
      saveOrderPayment(e.target.innerText);
      setFinishElect(!finishElect);
  }
  
  return (
        <Grid item md={4} >
            <Button
                arial-label={paymentMethod.name}
                color={paymentMethod.color}
                onClick={e => onClickHandler(e)}
                size="medium"
                variant= {finishElect? "contained" : "outlined"}
              >{paymentMethod.name}
                <h6>{paymentMethod.icon} </h6>
            </Button>
        </Grid>
  );
}

