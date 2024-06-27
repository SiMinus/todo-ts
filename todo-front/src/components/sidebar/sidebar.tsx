import React, {FC, ReactElement} from 'react';
import { Grid } from '@mui/material';
import { Profile } from '../profile/profile';
import { CreateTaskForm } from "../createTaskFrom/createTaskForm";
export const Sidebar:FC =(): ReactElement =>{

    return(
        <Grid
        item
        md={4}
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       <Profile name="Chenwei"/>
       <CreateTaskForm/>
      </Grid>
    );


};
