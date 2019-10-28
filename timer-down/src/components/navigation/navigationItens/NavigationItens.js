import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItens.css';

const navigationItems = (props) => (
    <ul className="mainNav__items">
        <li className="mainNav__item sideDrawer__logo" style={{marginRight: '20px'}}>
            <Link to="/">
                <img src={require('../toolbar/usaclimblogo.png')} alt="Logo" />
            </Link>
        </li>
        <li className="mainNav__item nav__busca">
            <form>
            <input className="input_find" type="text" name="busca" placeholder="O que você procura?" value={props.valorbusca} onChange={props.changed} />
            </form>
        </li>
        <li className="mainNav__item perfil__user">
            <span>minha conta </span>
        </li>
    </ul>
);

export default navigationItems;