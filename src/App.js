import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Items from './components/shopitems/items';
function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route path="/" component={Items}/>
        </Switch>
    </Router>
  );
}

export default App;
