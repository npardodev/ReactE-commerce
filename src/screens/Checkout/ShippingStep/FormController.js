import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const FormController = ({ mode, setMode }) => {

    const handleChange = (e) => {
        e.preventDefault();
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
                    onChange={e => handleChange(e)}
                />}
            label="Acordaré el retiro del producto en el Local"
        />
    </Grid>
}                       


