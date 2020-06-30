import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#ede7f6',
      width: '100vw',
      height: '100vh',
      
    },
    appbar: {
      backgroundColor: '#aa00ff',
      height:'90px',
    },
    title: {
      flexGrow: 1,
      color:'white',
      marginTop:'25px',
      marginLeft:'60px',
      fontFamily:'Roboto',
      fontSize:'30px',
    },
    button:{
        background: '#aa00ff',
        borderRadius: 6,
        border: 0,
        color: 'white',
        height: 40,
        width: "20%",
        padding: '10px 30px',
        marginBottom:'10px',
      }
  }));
export default function ForgotPassword(){
    const classes = useStyles();  

        return (
          <Grid className={classes.root}>
            <AppBar position="static" className ={classes.appbar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  eBus | Password Reset
                </Typography>
               
              </Toolbar>
            </AppBar>
            
            <Paper  style={{
                   padding: '20px 20px',
                   marginTop: '7%',
                   marginLeft:'30%',
                   marginRight:'30%',
                   textAlign: 'center',
                   borderRadius:10,
                   width:'35%',
                
            }}>
              
            <form >
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    
                  
                />
                 <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                   
                  
                />
                <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained">
                 {'Confirm'}
               </Button>
                <br></br>             
                           
            </form>
         </Paper>
          </Grid>
        );
    
}