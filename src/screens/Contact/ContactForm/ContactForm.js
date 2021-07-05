import React from 'react';
import { Card, CardContent, TextField, Button, Container} from '@material-ui/core';
import { makeStyles} from '@material-ui/core';
import {ContactStyles} from './../ContactStyles.js';

const useStyle = makeStyles ((theme) => ContactStyles(theme));

export const ContactForm = ({taskForm, newTask, handlerChange}) => {
    
    const classes = useStyle ();

    return ( 
        <Container component="main" maxWidth="xl">
        <div className={classes.paper}> 
        <Card>
            <CardContent>
            <form className={classes.form} onSubmit={newTask}>
                    <TextField name="name" label="Nombre" required id="standard-required" value={taskForm.name} onChange={handlerChange}/>
                    <TextField name="description" label="Descripcion" required id="standard-required" value={taskForm.description} onChange={handlerChange}/>
               
                <TextField name="email" label="Email" required id="standard-required" value={taskForm.description} onChange={handlerChange}/>
                <TextField name="phone" label="Teléfono" required id="standard-required" value={taskForm.description} onChange={handlerChange}/>
                <TextField
                    id="outlined-multiline-static"
                    label="Mensaje"
                    multiline
                    required
                    rows={4}
                />
            <Button disable ={taskForm.name === '' || taskForm.description ===''} type="submit" color="primary" variant="contained">Enviar </Button>

            </form>
            </CardContent>

        </Card> 
      </div>
      </Container> 
    )
  }

