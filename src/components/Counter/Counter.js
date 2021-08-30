import React from 'react';
import { CounterStyle } from './CounterStyle.js'
import { makeStyles, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => CounterStyle(theme));

export const Counter = ({ stock,count, setter, initial, onAdd }) => {

        const classes = useStyle();
        
        const handleAddCount = () => {
            if (stock - 1 >= count) {
                setter(count + 1);
            } else
                console.log("la cantidad indicada supera el stock actual");
        }

        const handleRemoveCount = () => {
            if (count > 0) {
                setter(count - 1);
            }
        }

        const handlerClick = (e) => {
            if (count <= stock) {
                onAdd();
                setter(0);
            }
           
        }

        return (
            <div className={classes.counterWidget} >
                <div className={classes.counter}>
                    <Button onClick={handleRemoveCount}color="primary">-</Button>
                    <h5>{`${count}`}</h5>
                    <Button onClick={handleAddCount} color="primary">+ </Button>                
                </div>
                <div className={classes.Stock}>
                { count !== 0 ? <Button variant="contained" color="primary" onClick={handlerClick}>Agregar</Button> : null }
                {stock ? <h4 className={classes.Stock}><mark>{`En stock!`}</mark></h4> : <h4 className={classes.noStock}>{`Agotado`}</h4> }
                </div>
               
            </div>
        )
    }
