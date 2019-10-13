import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import SignInSide from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import NotFound from './Components/NotFound';
import Rooms from './Components/Rooms';
import Group from './Components/Group';
import NewPage from './Components/NewGroup/NewGroup';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={SignInSide}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/rooms" component={Rooms}/>
        <Route path="/group/:grpID" component={Group}/>
        <Route path="/newgroup" component={NewPage}/>
        <Route component={NotFound}/>
      </Switch>

     
    </div>
  );
}

export default App;
