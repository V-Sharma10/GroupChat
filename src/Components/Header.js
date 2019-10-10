import React from 'react';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import {Tooltip,Zoom} from '@material-ui/core';
// import TypoGraphy from '@material-ui/core/Typography'
// import {ListItem,List,ListItemText, Menu, Container} from '@material-ui/core';
// import Home from './Home';

// import { Home } from '@material-ui/icons'
import {Link} from 'react-router-dom';
import SignInMenu from './SignInMenu';
import SignUpMenu from './SignUpMenu';
import firebase from '../Firebase/firebase'


class Header extends React.Component{

    state={
      islogged:false,
    }

    componentWillMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        console.log('firebase connected');
        if(user){
          this.setState({
            islogged:true,
          })
        }
        else{
          this.setState({
            islogged:false,
          })
        }

      })


    }
    // componentDidMount(){
    //   firebase.auth().onAuthStateChanged((user)=>{
    //     console.log('firebase connected');
    //     if(user){
    //       this.setState({
    //         islogged:true,
    //       })
          
    //     }else{
    //       this.setState({
    //         islogged:false,
    //       })
    //     }

    //   })


    // }

    render(){
    return(
            // <div className="Header">
            // <Container maxWidth="lg">
            
          <AppBar color="default" position="sticky">
          <Toolbar>
            {/* <TypoGraphy variant="title" */}
              {/* color="inherit"> */}
              
            
            <div style={{
              
              width:'90%',
              }}>
            <Tooltip TransitionComponent={Zoom} placement="bottom" title="Home">
            <Link to="/">
              <img src={require('./../assets/logo.png')} alt="logo" width="50px" />

              </Link>
              </Tooltip>
            </div>
            
            {/* </TypoGraphy> */}
            {/* <TypoGraphy align="right" color="secondary" display="inline" noWrap> */}
            {/* <div style={{display:'flex'}}> */}
              {this.state.islogged===false?<SignInMenu />:<SignUpMenu/>}
            
            
              {/* </div> */}
            {/* </TypoGraphy> */}
              {/* <button onClick={firebase.auth().signOut()} >log out</button> */}
          </Toolbar>  
        </AppBar>


        // </Container>
            // </div>
    )
}}
export default Header;