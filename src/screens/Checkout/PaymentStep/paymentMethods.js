import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const paymentMethods =[
  {
      name: 'Efectivo',
      id: 0,
      icon: <AttachMoneyIcon/>,
      color: 'primary',
    },
  {
      name: 'Tarjeta',
      id: 1,
      icon: <PaymentIcon/>,
      color: 'primary',
  },
  {
      name: 'Transf.',
      id: 2,
      icon: <AccountBalanceIcon/>,
      color: 'primary',
  }
];
