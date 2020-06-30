import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import sidebar from './Component/sidebar/sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/sidebar" component={sidebar}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;