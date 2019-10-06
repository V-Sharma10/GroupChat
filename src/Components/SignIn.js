import React, { Component } from 'react'
import firebase from './../Firebase/firebase'
import { Redirect } from 'react-router-dom'
import { Container, Typography, TextField } from '@material-ui/core';
import './style.css';
import LockIcon from '@material-ui/icons/Lock';
import {Icon} from '@material-ui/core'
// import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


export default class SignIn extends Component {
  state={
    islogged:false,
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          islogged:true,
          email:'',
          password:''

        })
      }

    })
  }
  handleChange=(event)=>{
    console.log([event.target.name]+' : '+ event.target.value);
  }
  render() {

    if(this.state.islogged){
      return <Redirect to="/"/>
    }
    return (
      <div className="signinPage">
          Signin Page
          <Container maxWidth="xs">
          <Typography className="signinPage" component="div" style={{ backgroundColor: '#bfbdba24'}} >
          {/* <i style={{color:'red',fontSize:'50px'}} className="fa fa-lock" aria-hidden="true"></i> */}
          <LockIcon style={{color:'aqua',fontSize:'50px'}}/>
          <TextField
          required
          id="outlined-email-input"
          label="Email"
          // className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.handleChange}
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          // className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          name="password"
          fullWidth
          required
          onChange={this.handleChange}
        />
        <br/>
        {/* <TextField
          id="filled-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="Enter your Email"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
        }}
      /> */}

{/* <ThemeProvider 
style={{color:'green'}}
  
>
        <Button  variant="contained" color="primary" 
        // className={classes.margin}
        >
          Theme Provider
        </Button>
      </ThemeProvider> */}
      <br/>
      <Button
        variant="contained"
        color="primary"
        // className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        
        Login
      </Button>
          </Typography>
          </Container>
      </div>
    )
  }
}
