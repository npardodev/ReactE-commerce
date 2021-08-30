import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {FooterStyle} from './FooterStyle.js';
import {socialFooterIcons, InfoColumns} from './FooterContent.js';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const FooterColumns = () => {
        
    const classes = useStyles();
    
    return <div className={classes.footerColumns}>
        {InfoColumns.map((column, i) => (
            <Box>
                <h4 key={i}>{column.title}</h4>
                {column.content.map((item) => 
                <h5>{item}</h5>)}
            </Box>
          )) }
        {<Box>
            {socialFooterIcons.map((item) => item)}
        </Box>}
    </div>   
   
}