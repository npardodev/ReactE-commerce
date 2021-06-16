import React, { useState, useEffect } from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import {Button, Typography, Chip} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//const useStyle = makeStyles ((theme) => ItemDetailStyle(theme));

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const ItemDetail = ({item}) => {
    const SPACING = 3;

    const classes = useStyles();

    return  <section>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid justify="center" alignItems="center" item xm={6}>
                            {/* <img src={item.img.src} alt={item.img.alt}/> */}
                            <h2>holas</h2>
                    </Grid>                        
                    <Grid item xm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3">{item.title} </Typography>
                                <Chip
                                avatar={""}
                                //label={item.category}
                                variant="outlined"
                                />
                        </Paper>
                    </Grid>   
                </Grid>		
    </section>
}


