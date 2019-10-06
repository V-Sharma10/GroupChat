import React, { Component } from 'react'
import firebase from './../Firebase/firebase'
import { Redirect } from 'react-router-dom'
import { Container, Typography, TextField, Snackbar } from '@material-ui/core';
import './style.css';
import LockIcon from '@material-ui/icons/Lock';
import {Icon} from '@material-ui/core'
// import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


export default class SignIn extends Component {
  state={
            islogged:false,
            open: false,
          vertical: 'top',
          horizontal: 'center',
          email:'',
          password:'',
          

  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          islogged:true,
          email:'',
          password:'',
          
        })
      }

    })
  }
  handleChange=(event)=>{
    console.log([event.target.name]+' : '+ event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit=()=>{
    console.log(this.state.email +" "+ this.state.password);
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password
    //   ,()=>{
    //   console.log('successful');
    // }
    ).then((any)=>{
      console.log('successful')
    }).catch((err)=>{
      console.log(err);

    this.handleClick();
      
    });

  }

  handleClick = () => {
    this.setState({ open: true, vertical:'bottom'});
  };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {

  const { vertical, horizontal, open } = this.state;


    if(this.state.islogged){
      return <Redirect to="/"/>
    }
    return (
      <div className="signinPage">
          Signin Page
          <Container maxWidth="xs">
          <Typography className="signinPage" component="div" style={{ backgroundColor: '#bfbdba24'}} >
          <LockIcon style={{color:'aqua',fontSize:'50px'}}/>
          <TextField
          required
          id="outlined-email-input"
          label="Email"
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
        
      <br/>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={this.handleSubmit}
      >
        
        Login
      </Button>
          </Typography>
          </Container>


        <Snackbar
        anchorOrigin={{ vertical,horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        // onClose={this.handleClose}
        autoHideDuration={2000}
        bodyStyle={{ backgroundColor: 'red', color: 'coral' }}
        
        // ContentProps={{
        //   'aria-describedby': 'message-id',
        // }}
        message={<span >Login Failed. Please Try Again.</span>}
      />
      </div>
    )
  }
}
