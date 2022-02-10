import React from 'react';
import classes from './styles.module.css';
import { PropTypes } from 'prop-types';

const Button = ({ children, clicked, btnType }) => {
  return (
    <button className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
  btnType: PropTypes.string,
};

export default Button;
