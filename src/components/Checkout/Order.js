import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CheckoutStyle} from './CheckoutStyle.js'

const useStyle = makeStyles((theme) => CheckoutStyle(theme));


export const Order = ({orderNumber}) => {
    
    if (orderNumber !== undefined && orderNumber !== null) {

    }

    return <>
        <Typography variant="h5" gutterBottom>
        Gracias por tu órden!
        </Typography>
        <Typography variant="subtitle1">
        Recordá que tu número de órden es: {`#${orderNumber}`}.
        </Typography>
        <Typography variant="subtitle1">
        Te enviaremos al mail brindado la confirmación y los detalles de 
        tu compra.
        </Typography>
  </>
}

