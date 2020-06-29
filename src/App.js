import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;