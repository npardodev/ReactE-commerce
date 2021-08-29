import React from 'react'
import Fab from '@material-ui/core/Fab';
import iconWhatsapp from './../../assets/icons/iconsWhatsapp2.svg';
import { SocialIconStyle } from './SocialIconStyles.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => SocialIconStyle(theme));

export const SocialIcon = () => {
    const classes = useStyles();
    const PHONE_NUMBER = 393456789715;

    const handlerOnClick = (e) => {
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`)
    }

    return (
        <Fab size="small" 
            color="secondary" 
            aria-label="like" 
            className={classes.float}
            onClick={e => handlerOnClick(e)}>
            <img src={iconWhatsapp} alt="Whatsapp icon"/>
        </Fab>
    );
}