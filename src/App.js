import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home/Home';
import Project from './components/Project/Project';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/projects">
            <Project />
        </Route>
        <Route path="/blogs">
            <Blog />
        </Route>
        <Route path="/contact">
            <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
