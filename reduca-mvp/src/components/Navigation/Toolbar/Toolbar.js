import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <div>
        <div className={classes.DesktopOnly+' '+classes.NavIcon}>
            <img src={require("../../../assets/icons/inst.png")} alt="icon instagram" className={classes.IconLogin} />
            <img src={require("../../../assets/icons/fc.png")} alt="icon facebook" className={classes.IconLogin} />
            <img src={require("../../../assets/icons/twt.png")} alt="icon twitter" className={classes.IconLogin} />
            <img src={require("../../../assets/icons/ytb.png")} alt="icon youtube" className={classes.IconLogin} />
            {/* <img src={require("../../../assets/icons/linkd.png")} className={classes.IconLogin} /> */}
            <span>login</span>
        </div>
        <div>
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
    </div>
    </div>
);

export default toolbar;