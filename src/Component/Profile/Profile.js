import React, {Component} from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';

class Profile extends Component{
    state = {
        display:false
    }
    toggleHandler=(e)=>{
    	    e.preventDefault();
        const currentStatus = this.state.display;
        this.setState({
            display: !currentStatus
        })
    }
    
    onSubmit = (e) => {
    e.preventDefault();
    }
    
    render(){
        let content = null;
        if(this.state.display){
            content= <Paper style={{
                padding: '20px 20px',
                 margin: 50,
                 textAlign: 'center',
                 borderRadius:15,
              
            }}>
             
            <form >
                <Typography>
                    <h3 style={{fontFamily:'Roboto'}}>Update Profile Details</h3>
                </Typography>
                <TextField
                    style={{width:'100%'}}
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
                    style={{width:'100%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                />
                <TextField
                    style={{width:'100%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="contactNo"
                    label="Contact No"
                    name="contactNo"

                />
                 <Button style={{
                     background: '#1b5e20',
                     borderRadius: 8,
                     border: 0,
                     color: 'white',
                     height: 40,
                     width: "30%",
                     padding: '10px 30px',
                     marginBottom:'10px',
                     marginTop:'10px'

                 }}
                  type="submit"
                  variant ="contained">Save</Button>
                  
            </form>
            </Paper> 
        }
        return(
            <Grid container 
            style={{
                flexGrow: 1,
                backgroundColor: '#a503fc',
                width: '98.93vw',
                height: '110vh',
                spacing: 0,
                }}>
            <Grid item xs={12} sm={4}>
            <Paper style={{
                  padding: '20px 20px',
                   margin: 50,
                   textAlign: 'center',
                   borderRadius:15,
                
              }}>
               
              <form  >
                  <Typography>
                      <h4 style={{fontFamily:'Roboto'}}>Profile Details</h4>
                  </Typography>
                  <h5 style={{textAlign: 'left',}}>Name:</h5>
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
                   <Button style={{
                       background: '#1b5e20',
                       borderRadius: 8,
                       border: 0,
                       color: 'white',
                       height: 40,
                       width: "30%",
                       padding: '10px 30px',
                       marginBottom:'10px',
                       marginTop:'10px'

                   }}
                    type="submit"
                    variant ="contained"
                    onClick={this.toggleHandler }>Update</Button>
              </form>
              </Paper> 
              {content} 
            </Grid>             
            </Grid>
        )
    }
}
export default Profile;
