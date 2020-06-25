import React, { Component } from 'react'  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';   
export class App extends Component { 
    render() {  
          return (  
            <div>  
              <AppBar position="static">  
                <Toolbar>  
                 <h3>Welcome to eBus</h3>
                </Toolbar>  
              </AppBar>     
            </div>  
           )  
       }  
}  
  
export default App;