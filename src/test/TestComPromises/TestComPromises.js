import React from 'react';
import { CartWidget } from '../../components/CartWidget/CartWidget';

import { makeStyles } from '@material-ui/core';

import { Snackbar } from '@material-ui/core/Snackbar';
//import { IconButton } from '@material-ui/icons/IconButton';
import { CloseIcon } from '@material-ui/icons/Close';

import { NavBarStyle } from '../../styles/NavBar/NavBarStyle.js'

const useStyle = makeStyles((theme) => NavBarStyle(theme));

/*
El requerimiento que tenemos hoy es:

Se nos solicita crear una promise, que 
sea rechazada y enviemos un mensaje negativo, como cuando
hablamos con una api y hay un error

Con esa datae mostremos un mensaje por pantalla  ----> Necesito o implica un state
que tenga una cierta duracion y que se pueda cerrar,
si quiero que se deje de mostrar antes de ese tiempo
*/


/*
El mensajito que aparece unos segundos y se va en material se llama 


const myFunction () =>  {
    alert("lala");
};





*/

/* Atajo
rafce */


/*
export const TestComPromises = () => {
    
    const [error,setError] = useState('')
    const [showError,setShowError] = useState(false)

    useEffect(() => {
        
    const myPromise = new Promie((resolve, reject) => {
        reject("Salio mal la comunicacion con la Api");
    });

    myPromise.catch( (error) => {
        setError(error);
        setShowError(true);
    });

    }, [])

    return (
            
            <Snackbar
                open= {showError}
                autoHideDuration = {600}
                message= {error} 
                onClose= {() => setError(false)} 
                action= {
                    <IconButton
                    arial-label="close"
                    color="inherit"
                    onClick={() => setShowError(false)}>
                    <CloseIcon/> 
                </IconButton> 
                }
            />
    )
}


*/



