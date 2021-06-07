import React,{useState} from 'react';
import '../../styles/styles.css';


export const Counter = props => {
    
    const [count, setCount] = useState(0);
    const [dateAndHour, setDateAndHour] = useState(undefined);

    const handleAddCount = () =>{
        setCount(count +1);
    }

    const handleRemoveCount = () =>{
        if (count > 0)
            setCount(count -1);
    }

    return (
        <div>
            <h4>{`${count}`}</h4>
            {dateAndHour && <h5>{dateAndHour} </h5> }
            <button onClick={e => handleAddCount()}>+</button>
            <button onClick={e => handleRemoveCount()}>-</button>
        </div>
    )
}


