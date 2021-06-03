import React from 'react';
import '../../styles/styles.css';

export const NavBar = () => {

    return <React.Fragment>
        <div className="nav">
            <ul className="menu">
                <li className="logo">
                        <span className="icon"><i className="fa fa-user" aria-hidden="true"></i></span>
                </li>
                <li><a href=""> Home</a></li>
                <li><a href=""> Productos</a></li>
                <li><a href=""> Nosotros</a></li>
                <li><a href=""> fghfgyr 1</a></li>
                <li><a href=""> Contact</a></li>
                <li className="logo">
                    <a href="">
                    </a>
                </li>
                <li className="orderBox">
                    <p id="orderItems" class="orderItems">+1</p>
                    <a href=""><span className="icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span></a>
                </li>
            </ul>
        </div>
    </React.Fragment>
}
