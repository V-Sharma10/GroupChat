import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './Components/Header';
import Box from '@material-ui/core/Box';

ReactDOM.render(
    <React.Fragment>
    <CssBaseline />
    <Box m={window.innerWidth>660?8:0} style={window.innerWidth>660? {marginTop:'0'} :{marginTop:'0',marginLeft:'0'}}>
    <BrowserRouter>
    <Header/>
    <Container maxWidth="md">
      <Typography component="div" style={{height: '100vh'}} >
      
      <App />
      </Typography>
    </Container>

    </BrowserRouter>
    </Box>
  </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


