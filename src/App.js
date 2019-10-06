import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import SignInSide from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={SignInSide}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route component={NotFound}/>
      </Switch>

     
    </div>
  );
}

export default App;
