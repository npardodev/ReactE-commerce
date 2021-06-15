import React, {useState, useEffect} from 'react';
import {Item} from '../../components/Item/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
//import { itemListStyles } from './ItemListStyles'
import LinearProgress from '@material-ui/core/LinearProgress';
//const useStyle = makeStyles((theme) => itemListStyles(theme));
import { myData } from './../../data/data.js';


const myPromise = () => {
    return new Promise ((resolve, reject) => {
        
        setTimeout(() => resolve (
           myData
        ), 3000)
        
       //reject("Error cargando los productos");
    })
}

export const ItemList = () => {

    //const classes = useStyle ();

    const [data, setData] = useState([]);
    const [error,setError] = useState('');
    const [showError,setShowError] = useState(false);

    const getItems = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos)
        });
        myPromise().catch(error => {
            setError(error);
            setShowError(true);
        });
    }

    useEffect(() => {
        getItems()
    }, [])

    return<>
        {
            (data.length === 0 ? (<CircularProgress color="primary" />) : (
            <div className= "container">
                <div className= "products">
                {data.map((element)=><Item key={element.id} 
                        id={element.id} 
                        title={element.title} 
                        price={element.price}
                        descrip={element.descrip}
                        img={element.img.src}  
                        alt={element.img.alt}
                        stock={element.stock}
                        />)}
                </div>
            </div>
        
            ))
        }
        <Snackbar open={showError} autoHideDuration={3000} >
            <Alert onClose={() => setShowError(false)} severity="error">
                {error}
            </Alert>
        </Snackbar>

    </>
}

