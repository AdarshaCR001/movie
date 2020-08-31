import React from 'react';
import './App.css';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import './css/Custom.css'
import { Router, Link } from "@reach/router"
import Signin from './components/Signin';
import Hoblist from './components/Hoblist';
import Movie from './components/Movie';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router className="flex-container">
        <Movie path="/" />
        <Signin path="signin" />
        <Signup path="signup" />
        <Hoblist path="hoblist" />
      </Router>
    </Provider>
  );
}

export default App;
