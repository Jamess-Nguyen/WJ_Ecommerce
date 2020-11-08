import React from 'react';
import './rsgpage.css';

const RsgPage = (props) => (
    <div>
        <div class="background">
        <div id="rsgMan"></div>
        </div>
        <div class="background3">
            <p>MGS PATCHWORK HOODIE: $90</p>
        </div>
        <div class="background2">
        <a><button className="bannerButton">Add To Cart</button></a>
        </div>
    </div>
);

/*
<div>
    <p>You have {props.items} items</p>
        <button onClick={() => props.insertCartItem("TEST")}>
            Click me
        </button>
    </div>
*/

export default RsgPage;