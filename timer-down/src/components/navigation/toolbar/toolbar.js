import React from 'react';
import { Link } from 'react-router-dom';

import './toolbar.css';

const Toolbar = (props) => (
    <header className="mainHeader">
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <div className="mainNav__item">
              <Link to="/" className="brand-logo">
                  <img src={require('../toolbar/usaclimblogo.png')} alt="Logo" />
              </Link>
            </div>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/add_festival"><span>Adicionar </span></Link></li>
              <li><Link to="/">Login With Google</Link></li>
            </ul>
          </div>
        </nav>
    </header>
)

export default Toolbar;