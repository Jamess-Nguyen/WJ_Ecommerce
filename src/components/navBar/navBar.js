import React from 'react';
import './navBar.css';

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
                <li><button onClick={topFunction}>Shop</button></li>
                <li><button onClick={topFunction}>About</button></li>
                <li><button onClick={topFunction}><b>Cart</b></button></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default NavBar;