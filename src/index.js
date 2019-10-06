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

ReactDOM.render(
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography component="div" style={{height: '100vh' }} >
      <BrowserRouter>
      <Header/>
      <App />
      </BrowserRouter>
      </Typography>
    </Container>
  </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


