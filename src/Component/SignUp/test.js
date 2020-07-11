import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            address: "",
            nic: "",
            contact: "",
            password: "",
            confirmpassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    nichandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    contacthandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmpasswordhandler = (event) => {
        this.setState({
            confirmpassword: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.email} Success`)
        this.props.history.push('/sidebardup');
        // console.log(this.state);
        // this.state({
        //   email:"",
        //   password:"",
        // })
        event.preventDefault()
    }

    render() {
        return (
            <Grid container style={{

                flexGrow: 1,
                backgroundColor: '#aa00ff',
                // alignItems: 'center',
                justifyContent: 'center',
                width: '99vw',
                height: '140vh',
                spacing: 0,
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 16,
                border: '1px solid',
                lineHeight: 1.5,
                borderColor: '#0063cc',
                paddingTop: '5%'

            }}>
                <Grid item xs={12} sm={6} >
                    <Typography component="h1" variant="" style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        fontSize: '1.8rem'
                    }} >
                        eBus
                    </Typography>
                    {/* <Card className={classes.card}>
                            <CardMedia
                            component="img"
                            alt="eBus image"
                            height="150px"
                            image={G3}
                            title="eBus image"
                            />
                    </Card> */}

                    <Paper style={
                        {
                            padding: '20px 20px',
                            // margin: 50,
                            textAlign: 'center',
                        }}>


                        <form onSubmit={this.handleSubmit}>
                            {/* <Card className={classes.card}>
              
                                <CardMedia
                                component="img"
                                alt="eBus image"
                                height="150"
                                image={G3}
                                title="eBus image"
                                />
                            </Card> */}

                            <Typography component="h2" variant="" >
                                User Registration
                            </Typography>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="User Name"
                                id="username"
                                value={this.state.username}
                                onChange={this.usernamehandler}
                                autoFocus
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.emailhandler}
                                autoComplete="email"

                            />

                            


                            <div>
                                <Button style={{
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    borderRadius: 8,
                                    border: 0,
                                    color: 'white',
                                    height: 48,
                                    width: "50%",
                                    padding: '10px 30px',
                                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                    marginBottom: '10px',
                                }}
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
}
