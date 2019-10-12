import React from 'react'
import firebase from './../Firebase/firebase'



export default class Group extends React.Component {

    componentDidMount(){
        firebase.database().ref(`/rooms/${this.props.match.params.grpID}/messages`).on('value',(snapshot)=>{
            console.log(snapshot.val());
        })
    }

    render(){

    return (
        
        <div>{window.scrollTo(0,0)}

           <h2 style={{textAlign:'center', color:'navy'}}> {this.props.match.params.grpID}</h2>
            
        </div>
    )
}
}
