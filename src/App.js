import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/navBar.js';
import NikePage from './components/nikepage/nikepage.js';
import Shop from './components/pages/shop.jsx';
import RsgPage from './components/rsgPage/rsgpage.jsx';
import Apage from './components/apage/apage.jsx';
import Cpage from './components/checkout/checkout.jsx';
import cart from "./components/cartPage/cart.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentCart: [], // cart
      CurrentUser: "Guest", // user
    };
    this.insertCartItem = this.insertCartItem.bind(this);
  }

  insertCartItem(item) {
    let oldItems = this.state.CurrentCart
    let oldUser = this.state.CurrentUser
    this.setState({
      CurrentCart: oldItems + [item],
      CurrentUser: oldUser
    })
  }

  render () {
    return(
      <div>
        <Router>
          <NavBar />
            <Switch>
              <Route path="/nike" component={NikePage}/>
              <Route path="/rsg" component={RsgPage}/>
              <Route path="/About" component={Apage}/>
              <Route path="/Cart" component={Cpage}/>
              <Route path="/" component={Shop}/>
            </Switch>
        </Router>
        <button onClick={() => this.insertCartItem("nice")}>
          Click me
        </button>
        <p>{this.state.CurrentCart}</p>
      </div>
    );
  }
}

export default App;
