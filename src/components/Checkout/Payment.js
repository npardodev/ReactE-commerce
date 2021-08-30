import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { OrderContext } from './../../Context/OrderContext/OrderContext.js'

const paymentMethods =[
  {
      name: 'Efectivo',
      id: 0,
      icon: <AttachMoneyIcon/>,
      color: 'primary',
    },
  {
      name: 'Tarjeta',
      id: 1,
      icon: <PaymentIcon/>,
      color: 'primary',
  },
  {
      name: 'Transf.',
      id: 2,
      icon: <AccountBalanceIcon />,
      color: 'primary',
  }
];

export const Payment =  ({paymentMethod})  => {
  
  const [finishElect, setFinishElect] = useState(false);
  const {saveOrderPayment} = useContext(OrderContext);

  const onClickHandler = (e) => {
      e.preventDefault();
      saveOrderPayment(e.target.innerText);
      setFinishElect(true);
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


export const PaymentContainer =  ()  => {
  return (
    <Container >
      <Typography variant="h6" gutterBottom>
      Forma de Pago:
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {paymentMethods.map((method, index) => {
            return <Payment key={method.id} paymentMethod={method}/>
        })}
      </Grid>
    </Container>
  );
}
