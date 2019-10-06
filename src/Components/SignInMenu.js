import React from 'react'
import {NavLink} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

export default function SignInMenu() {
    return (
        <div className="menuItems" style={{display:'flex',margin:'0 10px'}}>
            <Tooltip placement="bottom" title="Sign In">
            <NavLink style={{marginRight:'15px'}} to="/signin"  >
                 <i style={{fontSize:'30px',color:'black'}} className="fa fa-sign-in" aria-hidden="true"></i>
            </NavLink>
            </Tooltip>
            <Tooltip placement="bottom" title="Check out the Repository">
            <NavLink to="/signin"  >
                <i style={{fontSize:'30px',color:'black'}} className="fa fa-code" aria-hidden="true"></i>
            </NavLink>
            </Tooltip>
              
        </div>
    )
}
