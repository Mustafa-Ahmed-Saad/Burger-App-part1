import React from 'react';
import Burger from './../../Burger/index';
import Button from './../../Ui/Button/index';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = ({ ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button clicked={checkoutCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={checkoutContinue} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
