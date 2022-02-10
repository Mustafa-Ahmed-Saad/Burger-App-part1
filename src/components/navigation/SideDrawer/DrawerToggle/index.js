import React from 'react';
import classes from './styles.module.css';

const DrawerToggle = ({ clicked }) => {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
