import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import PermanentDrawerLeft from './Component/sidebar/sidebar';
import ResetPassword from './Component/SignIn/ResetPassword';
import Profile from './Component/Profile/Profile';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/sidebar" component={PermanentDrawerLeft}/>
                      <Route exact path="/resetpassword" component={ResetPassword}/>
                      <Route exact path="/profile" component={Profile}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;