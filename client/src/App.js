import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';
import Games from './components/pages/Games'
import Movies from './components/pages/Movies'
import Music from './components/pages/Music'

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
        <Route path='/games'><Games /></Route>
        <Route path='/movies'><Movies /></Route>
        <Route path='/music'><Music /></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
