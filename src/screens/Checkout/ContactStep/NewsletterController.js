import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const NewsletterController = ({ mode, setMode }) => {

    const handleChange = () => {
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
            label="Suscribirme al newsletter para recibir novedades"
        />
    </Grid>
}                       

