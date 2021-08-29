import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContactStyle } from '../ContactStyle.js';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ContactStyle(theme));

const socialIcons = [
    {
        icon: <InstagramIcon/>,
        title: '@Balutech',
    },
    {
        icon: <FacebookIcon/>,
        title: '/BalutechStore',
    }
];

export const ContactIcons = ({title}) => {

    const classes = useStyles();

    return <div className={classes.follow}>
                <h2>{title}</h2>
                <div className={classes.icons}>
                {socialIcons.map((element) =>  
                    <div>
                        {element.icon}
                        <h4>{element.title}</h4>
                    </div>
                )}
                </div>   
            </div>
}

