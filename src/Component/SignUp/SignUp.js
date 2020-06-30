import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PermanentDrawerLeft from './../SignIn/SignIn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#a503fc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '150vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    
    
  },
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome:{
    fontFamily:'sans-serif',
    textAlign: 'center',
    
      
  },
  ebus:{
    fontFamily:'Roboto',
    textAlign: 'center',
    color:'white',
    fontSize:'2.5rem',
    paddingTop: '1%',  
  },
  button:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'white',
    height: 48,
    width: "30%",
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  image:{
    height:'150px',
    width:'200px',
    paddingTop: '10%',
    
  },
  card: {
    maxWidth: 200,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} >
        <Typography component="h1" variant="" className={classes.ebus}>
               eBus 
        </Typography>
        <Grid item  >
                {/* <img src={G3} alt="ebus" className={classes.image}/> */}
                
        </Grid>
            
            <Paper style={
              {
                padding: '20px 20px',
                // margin: 50,
                textAlign: 'center',
            }}>

              
            <form>
            {/* <Card className={classes.card}>
              
            <CardMedia
             component="img"
             alt="eBus image"
             height="150"
             image={G3}
             title="eBus image"
            />
            </Card> */}
              
            <Typography component="h2" variant="" className={classes.welcome}>
               User registration
            </Typography>

            
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="user Name"
                    name="username"
                    autoComplete="User Name"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="nic"
                    label="NIC Number"
                    name="nic"
                    autoComplete="NIC"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    autoComplete="contact"
                    autoFocus
                />

                
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                />
                
                 
                <div>
                <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained">
                 {'Sign Up'}
                </Button>
                </div>
                <br></br>               
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}