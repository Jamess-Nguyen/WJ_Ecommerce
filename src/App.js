import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/navBar.js';
import NikePage from './components/nikepage/nikepage.js';
import Shop from './components/pages/shop.jsx';
import RsgPage from './components/rsgPage/rsgpage.jsx';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route path="/nike" component={NikePage}/>
          <Route path="/rsg" component={RsgPage}/>

          <Route path="/" component={Shop}/>
        </Switch>
    </Router>
  );
}

export default App;
