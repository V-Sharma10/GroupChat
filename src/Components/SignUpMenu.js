import React from 'react'
import {NavLink} from 'react-router-dom';
import {Tooltip,Zoom,Snackbar} from '@material-ui/core';
import firebase from './../Firebase/firebase'

export default function SignUpMenu() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
      });

      const handleClick = newState => () => {
        setState({ open: true, ...newState });
      };


const SignOut=()=>{
    console.log('signout attempted');
    firebase.auth().signOut().then((any)=>{
        console.log('sign out successful');
        handleClick({ vertical: 'bottom', horizontal: 'center' })
    })
    // .catch(err=> {console.log(err);alert('sign out failed')})

}

  const { vertical, horizontal, open } = state;
    
    return (
        <div className="menuItems" style={{display:'flex',margin:'0 10px'}}>
           
           <Tooltip TransitionComponent={Zoom} placement="bottom" title="Create New Group">
           <NavLink style={{marginRight:'15px'}}  className="" to="/signup"  >
                <i style={{fontSize:'30px',color:'black'}} className="fa fa-plus" aria-hidden="true"></i>
            </NavLink>
            </Tooltip>

           <Tooltip TransitionComponent={Zoom} placement="bottom" title="Sign Out">
            {/* <NavLink style={{marginRight:'15px'}}  className="" > */}
                <i onClick={SignOut} style={{fontSize:'30px',color:'black',pointer:"cursor"}} className="fa fa-user-circle-o" aria-hidden="true"></i>
            {/* </NavLink> */}
            </Tooltip>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                // key={`${vertical},${horizontal}`}
                open={open}
                // onClose={handleClose}
                // ContentProps={{
                // 'aria-describedby': 'message-id',
                // }}
                message={<span id="message-id">Signed Out</span>}
                />
              
              
        </div>
    )
}

