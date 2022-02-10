import React from 'react';
import classes from './styles.module.css';
import { PropTypes } from 'prop-types';

const Backdrop = ({ show, clicked }) => (show ? <div className={classes.Backdrop} onClick={clicked}></div> : null);

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;
