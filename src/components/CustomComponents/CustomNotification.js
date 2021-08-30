import React, {useState} from 'react';
import {Snackbar} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {TIME_DURATION_MSG} from './constants.js';

export const CustomNotification = ({message="", type="info", time={TIME_DURATION_MSG}}) => {
    
    const [showMessage,setShowMessage] = useState(true);
    
    const handlerClose = () =>{
        setShowMessage(false);
    }
    return (
        <Snackbar open={showMessage} onClose={handlerClose} autoHideDuration={TIME_DURATION_MSG} >
            <Alert onClose={handlerClose} severity={type}>{message}</Alert>
        </Snackbar>
    )
}


