import React,{Component} from 'react';
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
import G3 from  "../images/G3.png";


class SignIn extends Component{
  constructor(props){
    super(props);
      this.state={
        email :"",
        password:"",    
  }
  this.handleSubmit = this.handleSubmit.bind(this)
}
    emailhandler =(event)=>{
      this.setState({
        email:event.target.value
      })
    }
    passwordhandler =(event) =>{
      this.setState({
        password:event.target.value
      })
    }

    handleSubmit =(event) =>{
      alert(`${this.state.email} ${this.state.password} Success`)
      this.props.history.push('/dashboard');
      // console.log(this.state);
      // this.state({
      //   email:"",
      //   password:"",
      // })
      event.preventDefault()
    }


  render(){
    return (
    
     <Grid container style={{
          flexGrow: 1,
          backgroundColor: '#a503fc',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          spacing: 0,

      }}>
        <Grid item xs={12} sm={6} >
            <Typography component="h1" variant="" style={{
              textAlign: 'center',
              color:'white',
              fontSize:'2.5rem',
            }}>
               Welcome Back To eBus
            </Typography>
            <Card style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              marginTop: 20,
              height:'150px',
              width:'200px',
              position:'fixed',
            

            }}>
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
              
            <form onSubmit ={this.handleSubmit}>
           
                <Typography variant={'h5'}>
                <h3> Sign In </h3>
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address or UserName"
                    name="email"
                    value={this.state.email}
                    onChange ={this.emailhandler}
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
                    value={this.state.password}
                    onChange ={this.passwordhandler}
                    autoComplete="current-password"
                  
                />
                <Grid item>
                 <FormControlLabel
                    control={<Checkbox value="remember" color="default"/>}
                    label="Remember me"
                />
                </Grid>
                {/* <Link href="/sidebardup" variant="body2" underline="none"> */}
                <Button style={{
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  borderRadius: 8,
                  border: 0,
                  color: 'white',
                  height: 48,
                  width: "50%",
                  padding: '10px 30px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  marginBottom:'10px',
                }} 
                type="submit"
                variant="contained">
                 {'Sign In'}
               </Button>
               {/* </Link> */}
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
}
export default SignIn;