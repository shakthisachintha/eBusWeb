import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import G3 from  "../images/G3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#a503fc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    spacing: 0,
      
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome:{
    fontFamily:'Roboto',
    textAlign: 'center',
    color:'white',
    fontSize:'2.5rem',
      
  },
  image:{
    height:'150px',
    width:'200px',
    position:'fixed',
    
  },
  signin:{
    fontFamily:'Roboto',
  },
  card:{
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop: 20,
    height:'150px',
    width:'200px',
    position:'fixed',
  },

  button:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'white',
    height: 48,
    width: "50%",
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginBottom:'10px',
  }
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    
    <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} >
            <Typography component="h1" variant="" className={classes.welcome}>
               Welcome Back To eBus
            </Typography>
            <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="eBus image"
                  image={G3}
                  title="eBus image"
                />
            </Card>
            
            <Paper style={{
                padding: '20px 20px',
                margin: 50,
                textAlign: 'center',
                borderRadius:15,
                
            }}>
              
            <form >
           
                <Typography variant={'h5'}>
                <h3 className={classes.signin}> Sign In </h3>
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address or UserName"
                    name="email"
                    autoComplete="email"
                    // autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  
                />
                <Grid item>
                 <FormControlLabel
                    control={<Checkbox value="remember" color="default"/>}
                    label="Remember me"
                />
                </Grid>
                <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained">
                 {'Sign In'}
               </Button>
                <br></br>
                <Grid item >
                   Don't have an account?
                    <Link href="/signup" variant="body2">
                     {"Sign Up"}
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link href="/forgotpassword" variant="body2">
                      Forgot password?
                    </Link>
                </Grid>       
                           
            </form>
         </Paper>
        </Grid>
    </Grid>
  );
}