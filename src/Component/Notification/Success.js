import React, {Component} from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
;
class Success extends Component{
    render(){
        return(
          <div style={{
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            margin:'15px'
          }}>
          
          <Alert severity="success" style={{
            width:'600px',
            backgroundColor:'#b9f6ca',
            fontSize:'15px',

          }}>Well Done! This is a Successful!</Alert>
        </div>
        )
    }

}
export default Success;
