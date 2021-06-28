import React from 'react';
import { Item } from '../../components/Item/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { ItemListStyles } from './ItemListStyles.js'
import { CustomLoadingComponent } from './../CustomComponents/CustomLoadingComponent.js'

const useStyle = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = ({ items }) => {

        const classes = useStyle();

        return < >
            <
            Container className = { classes.conten }
        color = "primary"
        alignContent = "center" > {
                (items.length === 0 ? ( < CustomLoadingComponent iconLoad = { CircularProgress }
                        messageLoad = "Cargando..."
                        color = "primary" / > ) : ( <
                        div className = { classes.products } > {
                            items.map((element, index) => < Item key = { index }
                                item = { element }
                                />)} <
                                /div>
                            ))
                    } <
                    /Container> <
                    />
                }