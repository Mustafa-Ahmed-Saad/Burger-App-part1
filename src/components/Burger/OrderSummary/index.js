import React from 'react';
import Auxiliary from '../../../HOC/Auxiliary';
import Button from '../../Ui/Button';
import { PropTypes } from 'prop-types';

const OrderSummary = ({ ingredients, purchaseCanceled, purchaseContinued, totalPrice }) => {
  console.log('Modal reder ');

  // componentDidUpdate;
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   /* your code here [business logic for component did update] */
  //   console.log('[OrderSummary updated]');
  // });

  const ingredientsLis = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey]}
    </li>
  ));

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsLis}</ul>
      <p>
        <strong>Total Price:</strong> {totalPrice.toFixed(2)}
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCanceled} btnType="Danger">
        CANCLE
      </Button>
      <Button clicked={purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  purchaseCanceled: PropTypes.func,
  purchaseContinued: PropTypes.func,
  totalPrice: PropTypes.number,
};

export default OrderSummary;
