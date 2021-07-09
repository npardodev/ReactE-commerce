import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LanguageIcon from '@material-ui/icons/Language';
import StoreIcon from '@material-ui/icons/Store';
import Box from '@material-ui/core/Box';
import {Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import {useHistory } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


import iconWhatsapp from './../assets/icons/iconsWhatsapp2.svg';



import { makeStyles } from '@material-ui/core/styles';


import { CustomTheme } from './../styles/CustomTheme.js';

export const TestComponent = () => {
    
    const [inStore, setInStore] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [online, setOnline] = useState(false);

    const infoTypes = [
        {
            title: 'Envio a domicilio',
            color: 'secondary',
            icon: <LocalShippingIcon/>,
        },
        {
            title: 'Compra en tienda',
            color: 'primary',
            icon: <StoreIcon/>,
        },
        {
            title: 'Solo Web',
            color: 'secondary',
            icon: <LanguageIcon/>,
        },
    ];

    return (
        <div display="flex" justifyContent="space-around">

        { infoTypes.map((element) => {
            return <Tooltip title={element.title}>
                <IconButton color={element.color} disabled={delivery} aria-label="LocalShippingIcon">
                    {element.icon}
                </IconButton>
            </Tooltip>
        }) }        
        </div>
    )
}




const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(3),
      padding: theme.spacing(1),
    },

    float:{
        position:'fixed',
        width:'60px',
        height:'60px',
        bottom:'40px',
        right:'40px',
        borderRadius:'50px',
        textAlign:'center',
        fontSize:'30px',
        boxShadow: '2px 2px 3px #999',
        zIndex:'100',

        '& img':{
            height:'2em',
            width:'2em',
        }
    },
    myfloat:{
        marginTop:'16px',
    }
  }));


export const SocialIconButtons=() => {
    const classes = useStyles();
    const history = useHistory();
        
    const handlerOnClick = (e) =>{
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=393456789715`)
    }

    const handlerOnFocus = () =>{

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



