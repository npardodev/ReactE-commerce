
import React from 'react';
import {Button} from '@material-ui/core';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


export const ShowMessage = ({stock}) => {
	return <h4>{`Agregar:${stock}`}</h4>
}


export const CustomStockChangeController = ({changeStock, stock}) => {
	
    const [finish, setFinish] = useState(false);
    const history = useHistory();

    const handlerFinishCart = () => {history.push(`/cart`)};
    const handlerAddToCart = () => {setFinish(true)};
    const handlerCancelCart = () => {setFinish(false)};

	return <>
		<Button onClick={() => changeStock(stock +1)}>+</Button>
		<Button onClick={() => stock>0?changeStock(stock -1):null}>-</Button>
        { (!finish && stock)? <Button variant="contained" color="primary" onClick={handlerAddToCart}> <AddCircleIcon/>  Agregar </Button> : null }
        { (finish && stock)? <Button variant="contained" color="primary" onClick={handlerFinishCart}>Finalizar <AddShoppingCartIcon /></Button> : null }
        { (finish && stock)? <Button  color="secondary" size="small" onClick={handlerCancelCart}>Cancelar <DeleteIcon /></Button> : null }
    </>
}


export const StockContainer = ({component : ComponentCustomChangerStock}) =>{

	const [stock, setStock] = useState(0);

	const handlerStock = value => setStock(value);

	return <div>
        <ShowMessage stock={stock}/>
		<ComponentCustomChangerStock stock={stock} changeStock={handlerStock} />
	</div>
}
