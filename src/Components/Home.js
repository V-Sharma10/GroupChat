import React, { Component } from 'react'
import './style.css';
import {Container,Box, Button} from '@material-ui/core';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container maxWidth="md">

                <Box component="span" m={10}>
                    <Button variant="outlined" color="secondary"  >
                    Secondary
                    </Button>
                </Box>
                    

                </Container>
            </div>
        )
    }
}
