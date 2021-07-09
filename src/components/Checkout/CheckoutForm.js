
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const textFields =[
  { 
    required: true,
    id: "firstName",
    name: "firstName",
    label: "Nombre",
    fullWidth: true,
    autoComplete:"Nombre",
  },
  { 
    required: true,
    id: "lastName",
    name: "lastName",
    label: "Apellido",
    fullWidth: true,
    autoComplete:"Apellido",
  },
  { 
    required: true,
    id: "address",
    name: "address",
    label: "Direccion",
    fullWidth: true,
    autoComplete:"Direccion",
  },
  { 
    required: false,
    id: "addressObs",
    name: "addressObs",
    label: "Entre calles",
    fullWidth: true,
    autoComplete:"Aclaracion",
  },
  { 
    required: true,
    id: "city",
    name: "city",
    label: "Ciudad",
    fullWidth: true,
    autoComplete:"Ciudad",
  },
  { 
    required: true,
    id: "postalCode",
    name: "postalCode",
    label: "Codigo Postal",
    fullWidth: true,
    autoComplete: "Codigo Postal",
  },
  { 
    required: true,
    id: "locality",
    name: "locality",
    label: "Localidad",
    fullWidth: true,
    autoComplete:"Localidad",
  },
]


export const CheckoutFormContainer = () => {

  const [delivery, setDelivery] = useState(true);

  return (<>
    <Typography variant="h6" gutterBottom>
      Direccion de Envío
    </Typography>
    <Grid container spacing={3}>
          <CheckoutForm delivery={delivery} />
          <FormController mode={delivery} setMode={setDelivery}/>
    </Grid>
  </>)
}

  export const CheckoutForm = ({ delivery}) =>{
  
      return <>{ textFields.map((item,index) => {
         return <>
         <Grid item xs={12} sm={6}>
           <TextField
                 Key = {index}
                 required ={item.item}
                 id = {item.id}
                 name = {item.name}
                 label = {item.label}
                 fullWidth = {item.fullWidth}
                 autoComplete = {item.autoComplete}
                 disabled={delivery} />
         </Grid>
         </>
     })}
   </>
   }


  export const FormController = ({ mode , setMode}) =>{

    const handleChange =() => {
      setMode(!mode);
    }

    return <Grid item xs={12}>
          <FormControlLabel
            control={
            <Checkbox 
              color="secondary"
              name="saveAddress"
              value="yes"
              required={true}
              checked={!mode}
              onChange={handleChange}
            />}
            label="Usaré esta direccion para el envío de mi compra"
          />
           <FormControlLabel
            control={
            <Checkbox 
              color="secondary"
              name="saveAddress"
              value="yes"
              required={true}
              checked={mode}
              onChange={handleChange}
            />}
            label="Acordaré el retiro del producto en el Local"
          />
     </Grid>
  }