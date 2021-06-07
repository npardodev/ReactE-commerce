import React from 'react';
import {CartWidget} from '../../components/CartWidget/CartWidget';
import '../../styles/styles.css';

export const NavBar = () => {

    return <>
        <div className="nav">
            <ul className="menu">
                <li className="logo">
                        <img src='./img/logo.svg' alt="Imagen logo" />
                </li>
                <li><a href=""> Home</a></li>
                <li><a href=""> Productos</a></li>
                <li><a href=""> Nosotros</a></li>
                <li><a href=""> fghfgyr 1</a></li>
                <li><a href=""> Contact</a></li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </div>
    </>
}
