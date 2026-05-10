import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      
      <Switch>
        <Route exact path="/React-17-SystemJS-/index.html" component={Home} />
      </Switch>
      
      <Footer />
      
    </BrowserRouter>
  );
}

ReactDOM.render(<App />,document.getElementById('react-app'));
