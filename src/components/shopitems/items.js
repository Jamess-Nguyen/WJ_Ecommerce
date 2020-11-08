import React from 'react';
import './items.css';
import {Link} from "react-router-dom";

const Items = (props) => (
  <div className="background">
    <div className="itemBox">
        <div className="itemWrapper">
                <Link to="nike"><div id="nike" className="imageBox"><div className="cover"></div></div></Link>
        </div>
    </div>
    <div className="itemBox">
        <div className="itemWrapper">
                <Link to="rsg" className="linker"><div id="RSG" className="rsgBox"><div className="cover"></div></div></Link>
        </div>
    </div>
  </div>
);

export default Items;