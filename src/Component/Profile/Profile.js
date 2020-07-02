import React, {Component} from 'react';
import { Button, Grid, Paper, TextField, Typography, Avatar,Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
// import PermanentDrawerLeft from '../sidebar/sidebar';

class Profile extends Component{
    state = {
        display:false,
        profileIma :'https://i.ya-webdesign.com/images/profile-photo-png.png',
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
    imageHandler=(e) =>{
        const reader = new FileReader();
        reader.onload = ()=> {
            if(reader.readyState === 2){
                this.setState({profileIma:reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render(){
        const{profileIma} = this.state;
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
                backgroundColor: '#ede7f6',
                width: '98.93vw',
                height: '50vh',
                spacing: 0,
                
                }}>
           <AppBar position="static" 
                style={{
                backgroundColor:'#aa00ff',
                height:'90px',}}>
              <Toolbar>
               <Typography style={{
                   flexGrow: 1,
                   color:'white',
                   marginTop:'25px',
                   marginLeft:'60px',
                   fontFamily:'Roboto',
                   fontSize:'30px',
               }}>eBus| User Profile</Typography>
              </Toolbar>
            </AppBar>   
            <Grid item xs={12} sm={6}>
                
            <Paper style={{
                  padding: '20px 20px',
                   margin: 50,
                   borderRadius:15,
                
              }}>
                  <Grid style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                <Avatar src={profileIma} style={{
                    width: '200px',
                    height:'200px',
                    
                }}>
                </Avatar>
                 <input type= "file" id= "input" accept = "image/*" onChange={this.imageHandler}
                 style={{
                     display:'none'
                 }}>
                 </input>
                 <Grid>
                     <label htmlFor ="input">
                     <Icon style={{ 
                         fontSize: 15,
                         backgroundColor:'black',
                         color:'white'}}>+Upload</Icon>
                     </label>
                 </Grid>
                </Grid>
              <form  >
                  <Typography style={{textAlign: 'center',fontSize:'20px'}}>
                  <p><b>Name:</b>&nbsp;  Imalsha Surangi Rathnaweera</p>
                  <p><b>Email:</b>&nbsp; ImalshaRathnaweera1996@gmail.com</p>
                  <p><b>Address:</b>&nbsp;Sulakshi,Narangaswatta,kodagoda,imaduwa</p>
                  <p><b>Contact:</b>&nbsp;0776789632</p>
                  </Typography>
                  {/* <TextField
                  style={{width: '100%'}}
                  label={"Email Address"}
                  defaultValue="ImalshaRathnaweera1996@gmail.com"
                  InputProps={{
                    readOnly:true,
                  }}  
                  />
                  */}
                  <Grid style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                  }}>
                   <Button style={{
                       background: '#1b5e20',
                                            
                       borderRadius: 8,
                       border: 0,
                       color: 'white',
                       height: 40,
                       width: "30%",
                       padding: '10px 30px',
                       marginBottom:'10px',
                       marginTop:'10px',
                   }}
                    type="submit"
                    variant ="contained"
                    onClick={this.toggleHandler }>Update</Button>
                    </Grid>
              </form>
              </Paper> 
              {content} 
            </Grid> 
            <Grid item item xs={12} sm={6}>
                <Paper style={{
                  padding: '20px 20px',
                   margin: 50,
                   borderRadius:15,
                
              }}>
                  <form>
                  <Typography>
                    <h2 style={{fontFamily:'Roboto'}}>Change Your Password</h2>
                </Typography>
                <TextField
                    style={{width:'100%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="currentpassword"
                    type="password"
                    label="Current Password"
                    name="password"
                />
                <TextField
                    style={{width:'100%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="newpassword"
                    type="password"
                    label="New Password"
                    name="newpassword"
                />
                <TextField
                     style={{width:'100%'}}
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="confirmpassword"
                     type="password"
                     label="Confirm Password"
                     name="confirmpassword"
                />
                <Grid style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                  }}>
                   <Button style={{
                       background: '#1b5e20',
                                            
                       borderRadius: 8,
                       border: 0,
                       color: 'white',
                       height: 40,
                       width: "50%",
                       padding: '10px 30px',
                       marginBottom:'10px',
                       marginTop:'10px',
                   }}
                    type="submit"
                    variant ="contained">Password Change</Button>
                    </Grid>
                    </form>
                </Paper>
            </Grid>            
            </Grid>
        )
    }
}
export default Profile;
