// import React, {Component} from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// ;
// class Success extends Component{
//     render(){
//         return(
//           <div style={{
//             alignItems:'center',
//             justifyContent:'center',
//             display:'flex',
//             margin:'15px'
//           }}>
//           <Snackbar>
//           <Alert severity="success" style={{
//             width:'600px',
//             backgroundColor:'#b9f6ca',
//             fontSize:'15px',

//           }}>Well Done! This is a Successful!</Alert>
//           </Snackbar>
//         </div>
//         )
//     }

// }
// export default Success;
import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


class Success extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.Alert = this.Alert.bind(this);
    this.state = {
      succesAlert: true,
    };
  }

  handleClose() {
    this.props.closeAlert();
  }

  Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  render() {
    return (
      <Snackbar
        open={this.props.status}
        autoHideDuration={this.props.time}
        onClose={this.handleClose}
      >
        <this.Alert severity={this.props.color} onClose={this.handleClose}>
          {this.props.msg}
        </this.Alert>
      </Snackbar>
    );
  }
}

export default Success;