import React, { useState, useEffect } from 'react';
import { ItemDetailStyle } from './ItemDetailStyle.js'
import { makeStyles, CircularProgress} from '@material-ui/core';
import {Button, Typography, Chip} from '@material-ui/core';

const useStyle = makeStyles ((theme) => ItemDetailStyle(theme));

export const ItemDetail = ({items}) => {

    return  <>
    {
    (items.length === 0 ? (<CircularProgress color="primary" />) : 
    ( items.map((item, index) => {
					return  <article key={index}>
						<img src={item.img.src} alt={item.img.alt}/>
						<Typography variant="h3">{item.title} </Typography>
						<Chip
						avatar={""}
						label={item.type}
						variant="outlined"
						/>
						</article>
				})
        ))
    } 
    </>
}