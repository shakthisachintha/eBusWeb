import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#a503fc',
    width: '100vw',
    height: '100vh',
    spacing: 0,
      
  },
  profile:{
    fontFamily:'Roboto',
  },

}));

export default function Profile() {
  const classes = useStyles();
  return (
    
    <Grid container className={classes.root}>
        <Grid item xs={12} sm={4} >
            
            <Paper style={{
                padding: '20px 20px',
                margin: 50,
                textAlign: 'center',
                borderRadius:15,
                
            }}>
              
            <form >
           
                <Typography variant={'h5'}>
                <h4 className={classes.profile}> Profile Details </h4>
                </Typography>
                <TextField
                style={{width: '100%'}}
                label={"Email Address"}
                defaultValue="ImalshaRathnaweera1996@gmail.com"
                InputProps={{
                    readOnly:true,
                }}
                    
                />
                <TextField
                style={{width: '100%'}}
                label={"Address"}
                defaultValue="sulakshi kodagoda Imaduwa"
                InputProps={{
                    readOnly:true,
                }}
                    
                />
                <TextField
                style={{width: '100%'}}
                label={"Contact Number"}
                defaultValue="0772435613"
                InputProps={{
                    readOnly:true,
                }}
                    
                />                           
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}