import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ResponsiveDrawer from './../sidebar/siebardup'
import { Link } from "react-router-dom";

// sending requests
import axios from 'axios';


export default class BusRegister extends React.Component {

    constructor(props) {
        super(props);

         // Setting up functions
        this.onChangeBusNumber = this.onChangeBusNumber.bind(this);
        this.onChangeBusRoute = this.onChangeBusRoute.bind(this);
        this.onChangeBusCapacity = this.onChangeBusCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);

         // Setting up state
        this.state= {
            busNo: "",
            busRoute: "",
            busCapacity: "",
        }
    }

    onChangeBusNumber(e) {
        this.setState({
            busNo:e.target.value
        });
        console.log(e.target.value)
    }
    onChangeBusRoute(e) {
        this.setState({
            busRoute:e.target.value
        });
    }
    onChangeBusCapacity(e) {
        this.setState({
            busCapacity:e.target.value
        });
    }

    // onChange(event) {
    //     const { name, value, type, checked } = event.target

    //     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    // }

    onSubmit(e) {
        e.preventDefault();

        console.log(`form submited`);
        console.log(`Bus Number: ${this.state.busNo}`);
        console.log(`Bus Route: ${this.state.busRoute}`);
        console.log(`Bus Capacity: ${this.state.busCapacity}`);

        const newBus = {
            busNo: this.state.busNo,
            busRoute: this.state.busRoute,
            busCapacity: this.state.busCapacity
        }

        // const data = {
        //     busNo: "GL2322",
        //     busRoute: "MAharagama-Galle",
        //     busCapacity: 45
        // }

        // console.log(data)

        axios.post('http://localhost:4000/api/bus/register', newBus)
             .then(res => console.log(res.data));

        this.setState({
            busNo: '',
            busRoute: '',
            busCapacity: ''
        })
    }

    // componentDidMount(){
    //     console.log("Hello")
    // }

    render() {
        return(
            <Grid container style={{marginTop: 100, 
                                    display:"flex",
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                <ResponsiveDrawer/>
                <Grid item xs={12} sm={6} >
                
                    
                    <Paper style={
                    {
                        padding: '20px 50px',
                        margin: 50,
                        textAlign: 'center',
                    }}>

                    <form onSubmit= {this.onSubmit}>
                    
                       <Typography component="h2" variant="">
                            Bus Registration
                       </Typography>

                    
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busNumber"
                            label="Bus Number"
                            name="busNumber"
                            value={this.state.busNo}
                            onChange={this.onChangeBusNumber}
                            // onChange={this.onChange}
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busRoute"
                            label="Bus Route"
                            name="busRoute"
                            value={this.state.busRoute}
                            onChange={this.onChangeBusRoute} 
                            // onChange={this.onChange} 
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="busCapacity"
                            label="Bus Capacity"
                            name="busCapacity"
                            value={this.state.busCapacity}
                            onChange={this.onChangeBusCapacity} 
                            // onChange={this.onChange}        
                        />
                        
                        
                        {/* <div className="form-group">
                            <input type="submit" value="Register Bus" className="btn btn-primary"></input>
                        
                        </div> */}
                        <div>
                            <Button className="button" color="primary" 
                                type="submit"
                                variant="contained">
                                {'Register'}
                                <Link to="/viewBuses"></Link>
                            </Button>
                        </div>
                        <br></br>               
                    </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}