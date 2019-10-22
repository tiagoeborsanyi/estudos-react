import React from 'react';

import './toolbar.css';
import NavigationItems from '../navigationItens/NavigationItens';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className="mainHeader">
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        <nav className="DesktopOnly">
          <NavigationItems />  
        </nav>
    </header>
)

export default Toolbar;