import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { OrderContext } from './../../Context/OrderContext/OrderContext.js'
import {Button} from '@material-ui/core';



const textFields = [{
    required: true,
    id: "firstName",
    name: "firstName",
    label: "Nombre",
    fullWidth: true,
    autoComplete: "Nombre",
},
{
    required: true,
    id: "lastName",
    name: "lastName",
    label: "Apellido",
    fullWidth: true,
    autoComplete: "Apellido",
},
{
    required: true,
    id: "email",
    name: "email",
    label: "E-mail",
    fullWidth: true,
    autoComplete: "E-mail",
},
{
    required: false,
    id: "phone",
    name: "phone",
    label: "Teléfono",
    fullWidth: true,
    autoComplete: "Teléfono",
},
]


export const ContactFormContainer = () => {
   
    const initialStateForm = {
        firstName:'', 
        lastName:'',
        email:'', 
        phone:'', 
    };

    const [subscribe, setSuscribe] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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


export const CheckoutForm = ({contactForm, newContact, handlerChange}) => {

    const handlerOnClick = (e) =>{
        e.preventDefault();
        newContact();
    }

    return <>
        {textFields.map((item, index) => {
        return <>
            <Grid item xs={12} sm={6}>
                <TextField
                    Key={index}
                    required={item.item}
                    id={item.id}
                    name={item.name}
                    label={item.label}
                    fullWidth={item.fullWidth}
                    autoComplete={item.autoComplete}
                    value={contactForm[item.name]}
                    onChange={handlerChange}
                    />            
            </Grid>
        </>
        })}
        <Button disable ={contactForm === ''} onClick={e => handlerOnClick(e)} >Guardar</Button>
    </>
}


export const NewsletterController = ({ mode, setMode }) => {

    const handleChange = () => {
        setMode(!mode);
    }

    return <Grid item xs={12}>
        <FormControlLabel
            control={
                <Checkbox
                    color="secondary"
                    name="saveAddress"
                    value="yes"
                    required={true}
                    checked={!mode}
                    onChange={handleChange}
                />}
            label="Suscribirme al newsletter para recibir novedades"
        />
    </Grid>
}                       

