import React from 'react';
import {Item} from '../../components/Item/Item';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { ItemListStyles } from './ItemListStyles.js'

const useStyle = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = ({items}) => {

    const classes = useStyle ();
    
    return <Container className = {classes.conten } color="primary" alignContent="center">
            <div className = {classes.products }>
                {items.map((element, index)=><Item key={element.id} item={element}/>)}
            </div>
        </Container>
}



