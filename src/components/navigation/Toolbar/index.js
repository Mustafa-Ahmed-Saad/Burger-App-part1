import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationsItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import classes from './styles.module.css';
import { PropTypes } from 'prop-types';

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
};

export default Toolbar;
