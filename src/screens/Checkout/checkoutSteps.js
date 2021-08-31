import React from 'react';
import { ShippingFormContainer } from './ShippingStep/ShippingFormContainer.js';
import { ContactFormContainer } from './ContactStep/ContactFormContainer.js';
import { PaymentContainer } from './PaymentStep/PaymentContainer.js';
import { OrderService } from './OrderStep/OrderService.js'

export const actualDate = new Date().getFullYear();

export const checkoutSteps = [{
        name: 'Contacto',
        id: 0,
        content: <ContactFormContainer/>
    },
    {
        name: 'Delivery',
        id: 1,
        content: <ShippingFormContainer/>
    },
    {
        name: 'Pago',
        id: 2,
        content: <PaymentContainer/>
    },
    {
        name: 'Confirma',
        id: 3,
        content: <OrderService/>
    },
];