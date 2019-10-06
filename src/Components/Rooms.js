import React from 'react'
import {Card,CardContent,Typography,CardActions, Button,Container} from '@material-ui/core';

export default function Rooms(props) {
    return (
        <div>
            {props.grpName} <br/>

            <Container maxWidth="xs" style={{textAlign:'center'}}>

            <Card >
            <CardContent>
                {/* <Typography  color="textSecondary" gutterBottom>
                Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
               {props.grpName}
               qwerty
                </Typography>
                
               
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small">Enter</Button>
            </CardActions>
            </Card>
            </Container>
                <br/>
        </div>
    )
}
