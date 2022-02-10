import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png.png';
import classes from './styles.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
