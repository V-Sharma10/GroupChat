import React, { Component } from 'react'
import './style.css';
import {Container,Box, Button, Snackbar} from '@material-ui/core';
import firebase from './../Firebase/firebase'
import md5 from 'md5'
import Rooms from './Rooms';
import Spinner from './Spinner/Spinner'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            islogged:false,
            open: false,
            vertical: 'top',
            horizontal: 'center',
            user:'',
            grp:[],
            fetch:false,
    }
    }
    ShowGroup=(email)=>{
		return firebase.database().ref(`/users/${md5(email)}`).once('value',(snap)=>{
			console.log(snap.val());
			if(snap.val()){
			this.setState({grp:snap.val().grpid,fetch:true})
		}
	})
	}
   
    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.handleClick();
                this.setState({islogged:true,user:user.email});
                

            this.ShowGroup(user.email);      
            }
        })
        console.log(this.state.user);


    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){

            }else{
                this.setState({
                    islogged:false,
                    user:'',
                    grp:[],
                })
            }
        })

        window.scrollTo(0,0);
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
                <Container maxWidth="md" m={8} >

                <Box component="span" m={8} style={{textAlign:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <Container>
                        <img src={require('./../assets/logo.png')} alt="logo" width="300px"/>
                    </Container>
                    {this.state.islogged===true?<h2>Your Groups:<br/> </h2> :null}
                {this.state.islogged===false
                    ?<Container>
                <Link to="/signin">
                    <Button variant="outlined" color="primary">
                    Login 
                </Button>
                </Link>
                <Link to="signup">
                <Button variant="outlined" color="secondary">
                Sign Up 
                </Button>
                </Link>
                </Container>:this.state.fetch===false?<Spinner/>:
                <Container maxWidth="sm">   
                {this.state.grp.map((element,i)=>{

                    console.log(element);
                    // firebase.ref(`/rooms/${element}`).once((snap)=>{
                    //         console.log(snap.val())
                    // })

                    return(
                        <Rooms 
                        key={i}
                        grpName={element}
                         />
                    )}
                )}
                </Container>
                }
                    
                </Box>
                
                    

                </Container>
                <Snackbar
                    anchorOrigin={{ vertical,horizontal }}
                    key={`${vertical},${horizontal}`}
                    open={open}
                    // autoHideDuration={2000}
                    message={<span >Successfully logged in.</span>}
                    // icon="close"
                ></Snackbar>
            </div>
        )
    }
}
