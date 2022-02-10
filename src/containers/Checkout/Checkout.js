import React, { useState } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const Checkout = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1,
  });

  // this to receive state from navigate('/checkout', { state: { id: 1, name: 'sabaoon' } }); from BulderBurger component
  let location = useLocation();

  useEffect(() => {
    // get values from search query params of url
    const query = new URLSearchParams(location.search); // this to confirme from [?bacon=1&cheese=1&meat=1&salad=1] to
    const ingredientsFromSearchParams = {};
    // for (let [params] of query.entries()) {
    //   //  params  =>  ['bacon', '0']  ,   ['cheese', '0']  , ...
    //   ingredientsFromSearchParams[params[0]] = +params[1];
    // }
    // or we can use this
    // Returns an iterator we can use this query with out .entries() because en the last version the URLSearchParams can directly be used in a for...of structure to iterate over key/value
    for (const [key, value] of query.entries()) {
      ingredientsFromSearchParams[key] = +value;
    }

    setIngredients(ingredientsFromSearchParams);

    // or we can do this
    // const ingredientsFromSearchParams = {};
    // const query = location.search.slice(1).split('&');
    // query.forEach((i) => {
    // ingredientsFromSearchParams[i.split('=')[0]] = i.split('=')[1];
    // });
    // setIngredients(ingredientsFromSearchParams);
  }, []);

  const navigate = useNavigate();

  const checkoutCancelHandler = () => {
    // go back
    navigate(-1);
  };

  const checkoutContinueHandler = () => {
    navigate('/checkout/contact-data', { replace: true });
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancel={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      />
      <Outlet />
    </div>
  );
};

export default Checkout;
