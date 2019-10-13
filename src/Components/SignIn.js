import React, { Component } from 'react'
import firebase from './../Firebase/firebase'
import { Redirect, Link } from 'react-router-dom'
import { Container, Typography, TextField, Snackbar, Box } from '@material-ui/core';
import './style.css';
import LockIcon from '@material-ui/icons/Lock';
import {Icon} from '@material-ui/core'
// import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Spinner from './Spinner/Spinner';


export default class SignIn extends Component {
  state={
            islogged:false,
            open: false,
          vertical: 'top',
          horizontal: 'center',
          email:'',
          password:'',
          flag:false,
          

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
        window.scrollTo(0,0);
  }
  handleChange=(event)=>{
    console.log([event.target.name]+' : '+ event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit=()=>{
    console.log(this.state.email +" "+ this.state.password);
    this.setState({
      flag:true,
    });
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password
    //   ,()=>{
    //   console.log('successful');
    // }
    
    ).then((any)=>{
      console.log('successful');
      
    }).catch((err)=>{
      console.log(err);
      

    this.handleClick();
      
    });

  }

  handleClick = () => {
    this.setState({ open: true, vertical:'bottom'});
    // alert('Login failed. Please Try Again...')
    setTimeout(function(){
      this.setState({open:false});
 }.bind(this),2000);

//  this.snackbarAppear();
  };
  
  



  SpinnerDis=()=>{
    this.setState({
      open:true,
      flag:false,
      
    })
  }

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {

  const { vertical, horizontal, 
    // open 
  } = this.state;


    if(this.state.islogged){
      return <Redirect to="/"/>
    }
    return (<React.Fragment>
      {this.state.flag===false  && this.state.open===false?
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

        <hr/>
        <span>Doesn't have Account! Sign Up <Link to="/signup"><code>here</code></Link></span>

          </Typography>
          <Box mt={5}>
            <Copyright />
          </Box>
          </Container>


        <Snackbar
        anchorOrigin={{ vertical,horizontal }}
        key={`${vertical},${horizontal}`}
        open={true}
        // onClose={this.handleClose}
        autoHideDuration={2000}
        style={{  backgroundColor: 'red', }}
        
        // ContentProps={{
        //   'aria-describedby': 'message-id',
        // }}
        message={<span>No Account Found. Please Enter Credentials.</span>}
      />
      </div>
       :<h1 >Please Wait... <br/> <br/> <br/> <Spinner /></h1>} 



       {this.state.open===true  && this.state.flag===true?

       [
         

         <Snackbar
         anchorOrigin={{ vertical,horizontal }}
         key={`${vertical},${horizontal}`}
         open={true}
        //  onClose={this.handleClose}
         autoHideDuration={2000}
         style={{  backgroundColor: 'red', }}
         
         // ContentProps={{
         //   'aria-describedby': 'message-id',
         // }}
         message={<span>Login Failed. Please Try Again.</span>}></Snackbar>
         ,this.SpinnerDis()
        ]
        :null}
      </React.Fragment>
    )
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}