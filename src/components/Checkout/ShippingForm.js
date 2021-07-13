import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { OrderContext } from './../../Context/OrderContext/OrderContext.js'
import {Button} from '@material-ui/core';


const textFields = [
{
    required: true,
    id: "address",
    name: "address",
    label: "Direccion",
    fullWidth: true,
    autoComplete: "Direccion",
},
{
    required: false,
    id: "addressObs",
    name: "addressObs",
    label: "Entre calles",
    fullWidth: true,
    autoComplete: "Aclaracion",
},
{
    required: true,
    id: "city",
    name: "city",
    label: "Ciudad",
    fullWidth: true,
    autoComplete: "Ciudad",
},
{
    required: true,
    id: "postalCode",
    name: "postalCode",
    label: "Codigo Postal",
    fullWidth: true,
    autoComplete: "Codigo Postal",
},
{
    required: true,
    id: "locality",
    name: "locality",
    label: "Localidad",
    fullWidth: true,
    autoComplete: "Localidad",
},
]


export const ShippingFormContainer = () => {

    const initialStateForm = {
        address:'', 
        addressObs:'',
        city:'', 
        postalCode:'', 
        locality:'', 
    };

    const [delivery, setDelivery] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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

export const CheckoutForm = ({ delivery, deliveryForm, newAddress, handlerChange}) => {


    const handlerOnClick = () => {
        newAddress();
    }

    return <>{textFields.map((item, index) => {
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
                    disabled={delivery} 
                    value={deliveryForm[item.name]}
                    onChange={handlerChange}    
                />
            </Grid>
        </>
    })}
    <Button align="center" disable ={deliveryForm === ''} onClick={handlerOnClick} >Guardar</Button>

    </>
}


export const FormController = ({ mode, setMode }) => {

    const handleChange = (e) => {
        e.preventDefault();
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
            label="Usaré esta direccion para el envío de mi compra"
        />
        <FormControlLabel
            control={
                <Checkbox
                    color="secondary"
                    name="saveAddress"
                    value="yes"
                    required={true}
                    checked={mode}
                    onChange={e => handleChange(e)}
                />}
            label="Acordaré el retiro del producto en el Local"
        />
    </Grid>
}                       


