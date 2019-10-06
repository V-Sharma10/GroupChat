import React from 'react'
import {NavLink} from 'react-router-dom';

export default function SignUpMenu() {
    return (
        <div className="menuItems" style={{display:'block',margin:'0 10px'}}>
           
            <NavLink style={{marginRight:'15px'}}  className="" to="/signup"  >
                <i style={{fontSize:'30px',color:'black'}} className="fa fa-user-circle-o" aria-hidden="true"></i>
            </NavLink>
              
              
        </div>
    )
}
