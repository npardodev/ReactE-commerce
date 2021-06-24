import React from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress, Button} from '@material-ui/core';
import { CustomSelectComponent } from './../CustomComponents/CustomSelectComponent.js'

let categories = [{name:'Opt1', value:'Opt1'},{name:'Opt2', value:'Opt2'},{name:'Opt3', value:'Opt3'}];

const useStyles = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({item}) => {

    const classes = useStyles();

    return (item.length === 0 ? (<CircularProgress color="primary" />) : (
        <section>
            <div className= {classes.productItem}>
                <div>
                    <img src={item.img.src} alt={item.img.alt}/>
                </div>
                <div className= {classes.productDetails}>
                    <h3>{item.title}</h3>
                    <h4 className= {classes.actualPrice}>{item.price}</h4>
                    <h4 className= {classes.offerPrice}>{item.price}</h4>
                    <p>{item.longDescipt}</p>
                    <div>
                    <h4>Categoria</h4>
                    <CustomSelectComponent options ={categories} />
                    </div>
                    <Button variant="contained" color="primary"> Agregar </Button>
                </div>
            </div>
    </section>))
}

