import React from 'react'
import firebase from './../Firebase/firebase'
import Spinner from './Spinner/Spinner';

import {TextareaAutosize, TextField,Button,Icon,Snackbar} from '@material-ui/core';
import Message from './Message';



export default class Group extends React.Component {
    state={
        messagesArray:[],
        title:'',
        message:'',
        author:'',
        loaded:false,
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log(user.email);
                this.setState({
                    author:user.email,
                })
            }
            else{
                // alert('Login to Post messages.')
                this.setState({
                    open:true,
                })
            }
        })


        firebase.database().ref(`/rooms/${this.props.match.params.grpID}/messages`).on('value',(snapshot)=>{
            // console.log(snapshot.val());
            this.setState({
                messagesArray:snapshot.val().reverse(),
            },()=>{
                console.log(this.state.messagesArray);
                this.setState({
                    loaded:true
                })

            })
        })


        // console.log(this.state);
    }

    render(){


  const { vertical, horizontal, open } = this.state;

    return (
        
        <div>{window.scrollTo(0,0)}

           <h2 style={{textAlign:'center', color:'navy'}}> {this.props.match.params.grpID}</h2>

            <div style={{backgroundColor:'#bfbdba24'}}>

           {this.state.loaded===false?<Spinner/>:

            this.state.messagesArray?
            <div style={{height:'300px',overflowY:'auto',overflowX:'hidden'}}>

                 {this.state.messagesArray.map((element,i)=>{

                    return(
                        <Message key={i} 
                        message={element.message}
                        author={element.author}
                        title={element.title}
                        />
                    )

                        
                    })}

            </div>

          

           :<h2 style={{textAlign:'center'}}>No Messages Found</h2>
           }

            </div>

            <div className="new_msg" style={{textAlign:'center'}}>
            <TextField
                id="outlined-name"
                label="Title"
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
             />
             <br/>

            <TextareaAutosize 
            aria-label="minimum height" 
            rows={5} 
            style={{width:'75%',backgroundColor:'#00000010',fontSize:'15px',textAlign:'center'}} 
            placeholder="Your Message" />
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        disabled={this.state.open}
                    >
                        Send
                    </Button>
            </div>


            <Snackbar
         anchorOrigin={{ vertical,horizontal }}
         key={`${vertical},${horizontal}`}
         open={open}
        //  onClose={this.handleClose}
        //  autoHideDuration={200}
         style={{  backgroundColor: 'red', }}
         
         // ContentProps={{
         //   'aria-describedby': 'message-id',
         // }}
         message={<span>Login to read and post  messages.</span>}/>
            
        </div>
    )
}
}
