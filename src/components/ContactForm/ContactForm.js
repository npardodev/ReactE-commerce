import React, {useState} from 'react';
import '../../styles/styles.css';


export const ContactForm = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');


    const handlerForm = (event) =>{

        if (event.target.name === 'name') {
            /* Validar (e.target.value) */
            setNombre(event.target.value)
        }
        else if (event.target.name === 'email') {
            /* Validar (e.target.value) */
            setEmail(event.target.value)
        }

        else if (event.target.name === 'telefono') {
            /* Validar (e.target.value) */
            setTelefono(event.target.value)
        }
    }

    const handlerSubmit = (event) =>{
        event.preventDefault();

        /* Validar (e.target.value) */
    }

    return (
        <>
        <div className="contact">
                <form action="" onSubmit= {handlerSubmit()} >
                    <p>Usuario</p>
                    <p>Contraseña:</p>

                    <div>
                        <label htmlFor="name"> Nombre </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value= {nombre}
                            onChange= {
                                e =>  handlerForm(e)
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value= {email}
                            onChange= {
                                e =>  handlerForm(e)
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="telefono"> Telefono </label>
                        <input 
                            type="numeric" 
                            name="telefono" 
                            id="telefono"
                            value= {telefono}
                            onChange= {
                                e =>  handlerForm(e)
                            }
                        />
                    </div>

                      
                </form>
                <button type="submit"> Enviar datos</button>
            </div>
        </>

    );
}