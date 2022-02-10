import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './styles.module.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Chickout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
