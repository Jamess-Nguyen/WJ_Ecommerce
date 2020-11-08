import React from 'react';
import './nikepage.css';

function NikePage(props) {
    return (
        <div>
        <div class="background">
        <div id="nikeman"></div>
        </div>
        <div class="spacer"></div>
        <div class="background3">
            <p>Nike Sports Wear: $50</p>
        </div>
        <div class="background2">
        <a><button className="bannerButton">Add To Cart</button></a>
        </div>
    </div>
    );
}

/*
<div>
<p>You have {props.items} items</p>
    <button onClick={() => props.insertCartItem("TEST")}>
        Click me
    </button>
</div>
*/

export default NikePage;