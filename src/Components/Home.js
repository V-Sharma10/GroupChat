import React, { Component } from 'react'
import './style.css';
import {Container,Box, Button, Snackbar} from '@material-ui/core';
import firebase from './../Firebase/firebase'

export default class Home extends Component {
    state={
        islogged:false,
            open: false,
          vertical: 'top',
          horizontal: 'center',
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.handleClick();
                this.setState({islogged:true});
            }
        })
    }
    handleClick = () => {
        this.setState({ open: true, vertical:'bottom'});
        setTimeout(function(){
            this.setState({open:false});
       }.bind(this),2000);
      };
      

    render() {

  const { vertical, horizontal, open } = this.state;
        return (
            <div className="Home">
                <Container maxWidth="md">

                <Box component="span" m={10}>
                    <Button variant="outlined" color="secondary"  >
                    Secondary
                    </Button>
                </Box>
                    

                </Container>
                <Snackbar
                    anchorOrigin={{ vertical,horizontal }}
                    key={`${vertical},${horizontal}`}
                    open={open}
                    // onClose={this.handleClose}
                    autoHideDuration={2000}
                    
                    // ContentProps={{
                    //   'aria-describedby': 'message-id',
                    // }}
                    message={<span >Successfully logged in.</span>}
                    icon="close"
                ></Snackbar>
            </div>
        )
    }
}
