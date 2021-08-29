import React from 'react';
import {Typography} from '@material-ui/core';

export const Copyright = ({webName}) => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${webName} ${new Date().getFullYear()}.`}
      </Typography>
    );
  }
