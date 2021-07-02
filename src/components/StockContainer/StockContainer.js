
import React,{useContext}  from 'react';
import {Button} from '@material-ui/core';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {CartContext} from './../../Context/CartContext/CartContext.js'

export const ShowMessage = ({stock}) => {
	return <h4>{`Agregar:${stock}`}</h4>
}

export const CustomStockChangeController = ({stock, changeStock, item}) => {
	
    const [finish, setFinish] = useState(false);
    const history = useHistory();
	const {cartItems, addItem, removeItem} = useContext(CartContext);

    const onAdd = () => {
        changeStock(stock +1)
    }
    const onRemove = () => {
        if (stock>0)
            changeStock(stock -1)
    }

    const handlerFinishCart = () => {

        history.push(`/cart`)
    };

    const handlerAddToCart = () => {
        addItem(item,stock);
        setFinish(true);
    };

    const handlerCancelCart = () => {
        for (let i=0; i<stock; i++)
            removeItem(item.id);
        setFinish(false);
    };

        return <>
            { (!finish)? <Button onClick={ onAdd}>+</Button> : null}
            { (!finish)? <Button onClick={ onRemove}>-</Button> : null}
            { (!finish && stock)? <Button variant="contained" color="primary" onClick={handlerAddToCart}> <AddCircleIcon/>  Agregar </Button> : null }
            { (finish && stock)? <Button variant="contained" color="primary" onClick={handlerFinishCart}>Finalizar <AddShoppingCartIcon /></Button> : null }
            { (finish && stock)? <Button  color="secondary" size="small" onClick={handlerCancelCart}>Cancelar <DeleteIcon /></Button> : null }
        </>
    }


export const StockContainer = ({component : ComponentCustomChangerStock, stock,handlerChange, item={item}}) =>{

	return <div>
        <ShowMessage stock={stock}/>
		<ComponentCustomChangerStock stock={stock} changeStock={handlerChange} item={item} />
	</div>
}
