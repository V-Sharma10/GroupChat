import React from 'react'
import {Card,CardContent,Typography,CardActions, Button,Container} from '@material-ui/core';
import {Link} from 'react-router-dom'
export default function Rooms(props) {
    return (
        <div>
            {/* {props.grpName} <br/> */}

            <Container maxWidth="xs" style={{textAlign:'center'}}>

            <Card >
            <CardContent>
                {/* <Typography  color="textSecondary" gutterBottom>
                
                </Typography> */}
                <Typography variant="h5" component="h2">
                {props.grpName}
                </Typography>
                <Typography style={{float:'right!important'}} color="textSecondary">
                    Admin
                </Typography>
               
            </CardContent>
            <CardActions>
            <Link to={{pathname:`/group/${props.grpName}`,
            grpName:`${props.grpName}`}}>
            <Button variant="contained" color="primary" size="small">Enter</Button>
            </Link>
            </CardActions>
            </Card>
            </Container>
                <br/>
        </div>
    )
}
