import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { OrderContext } from './../../../Context/OrderContext/OrderContext.js'
import {CheckoutForm} from './CheckoutForm.js';
import {NewsletterController} from './NewsletterController.js';

const initialStateForm = {
    firstName:'', 
    lastName:'',
    email:'', 
    phone:'', 
};

export const ContactFormContainer = () => {
   
    const [subscribe, setSuscribe] = useState(false);
    let firstName, lastName, email, phone = '';
    const [contactForm, setContactForm] = useState(initialStateForm);

    const {saveOrderBuyer} = useContext(OrderContext);

    const addContact = newCont => setContactForm([newCont]);

    const newContact = () => {

        addContact({
              firstName:firstName,
              lastName:lastName,
              email:email,
              phone:phone,
          });
          saveOrderBuyer(contactForm);
          setContactForm(initialStateForm);
          console.log(contactForm);

      }
    
      const handlerChange = e =>{
          setContactForm({...contactForm,[e.target.name]:e.target.value});
      }


    return (<>
        <Typography variant="h6" gutterBottom>
            Tus datos de contacto:
          </Typography>
        <Grid container spacing={3}>
            <CheckoutForm 
                contactForm={contactForm}
                newContact={newContact}
                handlerChange={handlerChange}
                />
            <NewsletterController mode={subscribe} setMode={setSuscribe} />
        </Grid>
    </>)
}

