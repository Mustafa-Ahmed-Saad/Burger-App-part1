import React from 'react';
import classes from './styles.module.css';
import PropTypes from 'prop-types';

const { BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon } = classes;

const BurgerIngredient = (props) => {
  let ingredient = null;

  // TODO: try to return ingredient in each case
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={BreadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={BreadTop}>
          <div className={Seeds1}></div>
          <div className={Seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={Meat}></div>;
      break;
    case 'cheese':
      ingredient = <div className={Cheese}></div>;
      break;
    case 'salad':
      ingredient = <div className={Salad}></div>;
      break;
    case 'bacon':
      ingredient = <div className={Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

// p must be small in propTypes
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
