import React,{useState, useEffect} from 'react';
import { CounterStyle } from './CounterStyle.js'
import { makeStyles, Button} from '@material-ui/core';

const useStyle = makeStyles ((theme) => CounterStyle(theme));

export const Counter = ({ stock, initial,  onAdd }) => {
    
    const classes = useStyle ();
    const [count, setCount] = useState(initial);

    useEffect(() => {
    }, [count])

    const handleAddCount = () =>{
        if (stock -1 >= count){
            setCount(count +1);
        }
        else
            console.log("la cantidad indicada supera el stock actual");
    }

    const handleRemoveCount = () =>{
        if (count >0){
            setCount(count -1);
        }
    }


    return (
        <div className={classes.counterWidget} >
            <div className={classes.counter}>
                <Button onClick={handleRemoveCount}color="primary">-</Button>
                <h5>{`${count}`}</h5>
                <Button onClick={handleAddCount} color="primary">+ </Button>                
            </div>
            { count !== 0 ? <Button variant="contained" color="primary">Agregar</Button> : null }
            <h4>{`En stock: ${stock}`}</h4>
        </div>
    )
}


