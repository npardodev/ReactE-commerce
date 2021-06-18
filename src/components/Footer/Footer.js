import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import {Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
   
    Box: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'yellow'
    },
  }));


export const Footer = () => {

    const classes = useStyles();

    return <>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Container maxWidth='lg'>
                <Box display="flex" flexDirection="row" justifyContent="space-between" p={1} m={1} bgcolor="background.paper">
                    <Box p={1} >
                        Item 1
                    </Box>
                    <Box p={1} >
                        Item 2
                    </Box>
                    <Box p={1} >
                        Item 3
                    </Box>
                </Box>
                <Box textAlign="center">
                    misitio.com &reg; 
                </Box>
            </Container>
        </Box>

    </>
}
