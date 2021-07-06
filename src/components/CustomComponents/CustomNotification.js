import React, {useState} from 'react';
import {Snackbar} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const TIME_DURATION_MSG = 5000;

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


