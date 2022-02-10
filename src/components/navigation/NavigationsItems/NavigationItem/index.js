import React from 'react';
import classes from './styles.module.css';
import PropTypes from 'prop-types';

const NavigationItem = ({ children, link, active }) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={active ? classes.active : null} href={link}>
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  active: PropTypes.bool,
};

export default NavigationItem;
