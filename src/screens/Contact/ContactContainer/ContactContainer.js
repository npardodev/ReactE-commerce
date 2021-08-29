import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContactStyle } from '../ContactStyle.js';
import { MyCustomMap } from '../Map/Map.js';
import { ContactIcons } from '../ContactIcons/ContactIcons.js';

const useStyles = makeStyles((theme) => ContactStyle(theme));

export const ContactContainer= () => {

    const classes = useStyles();

    return <section>
        <div className={classes.contactContainer}>
            <div className={classes.map}>
                <MyCustomMap />
            </div>
            <ContactIcons  title={`¡Encontranos por aca!`} />
        </div>
    </section>
};

