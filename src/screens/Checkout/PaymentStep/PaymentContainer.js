import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { paymentMethods } from './paymentMethods.js'
import { Payment } from './Payment.js'


export const PaymentContainer =  ()  => {
  return (
    <Container >
      <Typography variant="h6" gutterBottom>
      Forma de Pago:
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {paymentMethods.map((method, index) => {
            return <Payment key={method.id} paymentMethod={method} />
        })}
      </Grid>
    </Container>
  );
}
