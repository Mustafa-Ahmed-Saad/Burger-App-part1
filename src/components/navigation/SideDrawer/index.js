import React from 'react';
import Logo from '../../Logo';
import NavigationItems from '../NavigationsItems';
import classes from './styles.module.css';
import Backdrop from './../../Ui/Backdrop/index';
import Auxiliary from '../../../HOC/Auxiliary';
import { PropTypes } from 'prop-types';

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={open} clicked={closed} />
      {/* <div
        className={open ? [classes.SideDrawer, classes.Open].join(' ') : [classes.SideDrawer, classes.Close].join(' ')}
      > */}
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func,
};

export default SideDrawer;
