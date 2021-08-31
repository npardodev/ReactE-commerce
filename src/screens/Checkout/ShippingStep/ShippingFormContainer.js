import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { OrderContext } from './../../../Context/OrderContext/OrderContext.js'
import {CheckoutForm} from './CheckoutForm.js'
import {FormController} from './FormController.js';

const initialStateForm = {
    address:'', 
    addressObs:'',
    city:'', 
    postalCode:'', 
    locality:'', 
};

export const ShippingFormContainer = () => {

    const [delivery, setDelivery] = useState(0);
    let firstName, lastName, email, phone = '';
    const [addressForm, setAddressForm] = useState(initialStateForm);
    const {saveOrderDelivery} = useContext(OrderContext);

    const addAdress = newAddress => setAddressForm([newAddress]);

    const newAddress = () => {
        addAdress({
              firstName:firstName,
              lastName:lastName,
              email:email,
              phone:phone,
          });
          saveOrderDelivery(addressForm);
          setAddressForm(initialStateForm);
      }
    
      const handlerChange = e =>{
        setAddressForm({...addressForm,[e.target.name]:e.target.value});
      }

    return (<>
        <Typography variant="h6" gutterBottom>
            Direccion de Envío
          </Typography>
        <Grid container spacing={3}>
            <CheckoutForm 
                delivery={delivery}
                deliveryForm={addressForm}
                newAddress={newAddress}
                handlerChange={handlerChange}
            />
            <FormController mode={delivery} setMode={setDelivery} />
        </Grid>
    </>)
}