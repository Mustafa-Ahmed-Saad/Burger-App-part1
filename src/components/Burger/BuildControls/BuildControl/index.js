import React from 'react';
import classes from './styles.module.css';
import { PropTypes } from 'prop-types';

const BuildControl = ({ label, added, removed, disabled, count }) => {
  const { BuildControl, Label, Less, More } = classes;
  return (
    <div className={BuildControl}>
      <div className={Label}>{label}</div>
      <button onClick={removed} className={Less} disabled={disabled}>
        Less
      </button>
      <button onClick={added} className={More}>
        More
      </button>
      <p>{count}</p>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.bool,
  count: PropTypes.number,
};

export default BuildControl;
