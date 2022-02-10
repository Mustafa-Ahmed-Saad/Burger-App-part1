import React from 'react';
import BuildControl from './BuildControl';
import classes from './style.module.css';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled, price, purchasable, ingredients, ordered }) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(({ label, type }, i) => (
        <BuildControl
          key={i}
          added={() => {
            ingredientAdded(type);
          }}
          removed={() => {
            ingredientRemoved(type);
          }}
          label={label}
          count={ingredients[type]}
          disabled={disabled[type]}
        />
      ))}
      <button className={classes.OrderButton} onClick={ordered} disabled={!purchasable}>
        Order Now
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disabled: PropTypes.objectOf(PropTypes.bool),
  price: PropTypes.number,
  purchasable: PropTypes.bool,
  ingredients: PropTypes.objectOf(PropTypes.number),
  ordered: PropTypes.func,
};

export default BuildControls;
