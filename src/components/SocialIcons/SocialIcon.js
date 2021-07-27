import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LanguageIcon from '@material-ui/icons/Language';
import StoreIcon from '@material-ui/icons/Store';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import { useHistory } from 'react-router-dom';

import iconWhatsapp from './../../assets/icons/iconsWhatsapp2.svg';
import { SocialIconStyle } from './SocialIconStyles.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => SocialIconStyle(theme));


export const SocialIcon = () => {
    const classes = useStyles();
    const history = useHistory();
    const PHONE_NUMBER = 393456789715;

    const handlerOnClick = (e) => {
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`)
    }

    const handlerOnFocus = () => {
    }

    return (
        <Fab size="small" 
            color="secondary" 
            aria-label="like" 
            className={classes.float}
            onClick={e => handlerOnClick(e)}
            onFocus={handlerOnFocus()}

            >
            <img src={iconWhatsapp} />
        </Fab>
    );
}