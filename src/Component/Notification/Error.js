import React, {Component} from 'react';
//import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class Error extends Component{
    render(){
        return(
            <div style={{
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                margin:'15px'
              }}>
              
              <Alert severity="error" style={{
                width:'600px',
                backgroundColor:'#ffcdd2',
                fontSize:'15px',
    
              }}>Error! This is a Unsuccessful!</Alert>
            </div>
        )
    }

}
export default Error;
