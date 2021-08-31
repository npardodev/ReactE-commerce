import React, {useState, createContext} from 'react';

export const OrderContext = createContext();

export const OrderComponentContext = ({ defaultValue=[], children}) => {

    const [order, setOrder] = useState({
		buyer: '',
		newsletter:'',
		delivery: '',
        items: '',
		payment: '',
        date: '',
        total: '',
		id: '',
	});

	const saveOrderId = (newId) =>{
		setOrder({ ...order, id:newId});
	}

	const saveOrderPayment = (payment) =>{
		setOrder({ ...order, payment:payment});
	}

	const saveNewsletter = (subscribe) =>{
		setOrder({ ...order, newsletter:subscribe });
	}
	
	const saveOrderDelivery = (delivery) =>{
		setOrder({ ...order, delivery:delivery});
	}

	const saveOrderBuyer = (contactForm) =>{
		const { firstName, lastName, email, phone  } = contactForm;
		setOrder({ ...order, buyer:{name:`${firstName} ${lastName}`,phone:phone, email: email }});
	}

	return <OrderContext.Provider value={{saveOrderId, saveNewsletter, saveOrderBuyer, saveOrderDelivery, saveOrderPayment, order}} >
		{children}
	</OrderContext.Provider>
}
