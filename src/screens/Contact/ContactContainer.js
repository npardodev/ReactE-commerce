import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContactStyle } from './ContactStyle.js';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { MyCustomMap } from './Map/Map.js';


const useStyles = makeStyles((theme) => ContactStyle(theme));

export const ContactContainer= () => {

    const classes = useStyles();

    return <section>
        <div className={classes.contactContainer}>
            <div className={classes.map}>
            <MyCustomMap />
            </div>
            <div className={classes.follow}>
                <h2>¡Encontranos por aca!</h2>
                <div className={classes.icons}>
                    <div>
                        <InstagramIcon fontSize='large'/>
                        <h4>@Balutech</h4>
                    </div>
                    <div>
                        <FacebookIcon fontSize='large'/>
                        <h4>/BalutechStore</h4>
                    </div>
                </div>   
            </div>
        </div>
    </section>
};

