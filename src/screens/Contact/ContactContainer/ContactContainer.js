import React, {useState} from 'react';
import {ContactForm} from './../ContactForm/ContactForm.js';
import { makeStyles} from '@material-ui/core';
import {ContactStyles} from './../ContactStyles.js';
const useStyle = makeStyles ((theme) => ContactStyles(theme));

export const ContactContainer= ({tasks, addNewTask}) => {
    const initialStateForm = {name:'', description:'' };
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const classes = useStyle ();

    const [taskForm, setTaskForm] = useState(initialStateForm);
  
    const newMessage = e => {
      e.preventDefault();
      addNewTask({nombre:name, description:description});
      setTaskForm(initialStateForm);
    }
  
    const handlerChange = e =>{
        setTaskForm({...taskForm,
        [e.target.name]:e.target.value});
    }
    return <ContactForm taskForm={taskForm} handlerChange={handlerChange} newTask={newMessage} />
  }
  