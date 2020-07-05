import React, { Component } from 'react';
import SignIn from './Component/SignIn/SignIn';  
import SignUp from './Component/SignUp/SignUp'; 
import ForgotPassword from './Component/SignIn/ForgotPassword';
import PermanentDrawerLeft from './Component/sidebar/sidebar';
import AddConductor from './Component/Conductor/AddConductors/AddConductor';

import ViewConductor from './Component/Conductor/ViewConductors/ViewConductors';
import ViewConductorDup from './Component/Conductor/ViewConductors/ViewConductorsDup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPassword from './Component/SignIn/ResetPassword';
import Profile from './Component/Profile/Profile';
import Profiledup from './Component/Profile/Profiledup'
import ResponsiveDrawer from './Component/sidebar/siebardup';
import MaterialTableDemo from './Component/Profile/table';

  
class App extends Component { 
    render() {  
          return (  
              <Router>
                  <Switch>
                      <Route exact path="/" component={SignIn}/>
                      <Route exact path ="/signup" component ={SignUp}/>
                      <Route exact path="/forgotpassword" component={ForgotPassword}/>
                      <Route exact path="/addconductor" component={AddConductor}/>
                      <Route exact path="/viewconductor" component={ViewConductor}/>
                      <Route exact path="/resetpassword" component={ResetPassword}/>
                      <Route exact path="/sidebar" component={PermanentDrawerLeft}/>
                      <Route exact path="/profile" component={Profile}/>
                      <Route exact path="/profiledup" component={Profiledup}/>
                      <Route exact path="/addconductor" component={AddConductor}/>
                      {/* <Route exact path="/viewconductordup" component={ViewConductorDup}/> */}
                      <Route exact path="/viewconductordup" component={ViewConductorDup}/>
                      <Route exact path="/sidebardup" component={ResponsiveDrawer}/>
                      <Route exact path = "/table" component ={MaterialTableDemo}/>
                  </Switch>
              </Router>
          
           )  
       }  
}  
  
export default App;