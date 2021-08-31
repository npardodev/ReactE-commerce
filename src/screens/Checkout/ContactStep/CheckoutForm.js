import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import {contactFields} from './contactFields.js';
import {CustomNotification} from './../../../components/CustomComponents/CustomNotification.js'


export const CheckoutForm = ({contactForm, newContact, handlerChange}) => {
    
    const [complete, setComplete] = useState(true);

    const handlerOnClick = (e) =>{
        e.preventDefault();
        newContact();
        setComplete(false);
    }

    return <>
        {contactFields.map((item, index) => {
        return <Grid item xs={12} sm={6}>
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
                    disabled={!complete}
                    />            
            </Grid>
        })}
        {complete? <Button  align="center" disabled ={!complete} onClick={e => handlerOnClick(e)} >Guardar</Button>
        :
        <CustomNotification message = { "Datos Completados! Continue" } type = "success" />
        } 
    </>
}
