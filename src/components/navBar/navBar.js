import React from 'react';
import './navBar.css';
import {Link} from "react-router-dom";

function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

const NavBar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__logo"><a>WJ Commerce</a></div>
        <div className="toolbar_navigation-items">
            <ul>
                <li class="emptySpacer"></li>
                <Link to="/"><li><button onClick={topFunction}>Shop</button></li></Link>
                <Link to="/About"><li><button onClick={topFunction}>About</button></li></Link>
                <Link to="/Cart"><li><button onClick={topFunction}><b>Cart</b></button></li></Link>
            </ul>
        </div>
    </nav>
  </header>
);

export default NavBar;