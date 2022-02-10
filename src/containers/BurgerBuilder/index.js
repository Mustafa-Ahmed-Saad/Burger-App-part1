import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios-order';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary';
import Modal from '../../components/Ui/Modal';
import Spinner from '../../components/Ui/Spinner/Spinner';
import Auxiliary from '../../HOC/Auxiliary';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

// MAIN PRICES
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 1.3,
  meat: 0.7,
};

const BurgerBuilder = () => {
  // State
  const [ingredients, setIngredients] = useState(null);
  // ingredients = {
  //   salad: 0,
  //   bacon: 0,
  //   cheese: 0,
  //   meat: 0,
  // }
  const [totalPrice, setTotalPrice] = useState(4);
  // disable or not button (Order Now)
  const [purchasable, setPurchasable] = useState(false);
  // show or not modal
  const [purchasing, setPurchasing] = useState(false);
  // loading
  const [loading, setLoading] = useState(false);
  // error get ingredients
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('*************************************');
    console.log('componentDidMount => BurgerBuilder');
    console.log('*************************************');

    axiosInstance
      .get('https://react-my-burger-94116-default-rtdb.firebaseio.com/ingredients.json')
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // {salad: true, bacon: false, ...}
  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const addIngredientHandler = (type) => {
    const newIngredients = { ...ingredients };
    const oldCount = newIngredients[type];
    const updateCount = oldCount + 1;
    newIngredients[type] = updateCount;
    setIngredients(newIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice((oldPrice) => oldPrice + priceAddition);

    updatePurchasable(newIngredients);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) {
      return;
    }
    const newIngredients = { ...ingredients };
    const oldCount = newIngredients[type];
    const updateCount = oldCount - 1;
    newIngredients[type] = updateCount;
    setIngredients(newIngredients);

    const priceDeduction = INGREDIENT_PRICES[type];
    setTotalPrice((oldPrice) => oldPrice - priceDeduction);

    updatePurchasable(newIngredients);
  };

  function updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => ingredients[igkey])
      .reduce((cur, prev) => cur + prev, 0);

    setPurchasable(sum > 0);
  }

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  // if we use areEqual function in Modal compoenent with React.memo in this case we dont need to make purchaseCancleHandler finction in callback because we render Modalcomponent independant of statment in areEqual in this case we independat on show only to render Modal compoenent  // const areEqual = (a, b) => a.show === b.show;
  const purchaseCancleHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinuedHandler = () => {
    // setLoading(true);
    // const order = {
    //   ingredients: ingredients,
    //   price: totalPrice,
    //   // data of customer will get it from form of checkout
    //   customer: {
    //     name: 'mustafa',
    //     address: {
    //       street: 'street1',
    //       zipCode: '43352',
    //       country: 'Egypt',
    //     },
    //     email: 'test@test.com',
    //   },
    //   deliveryMethod: 'fastest',
    // };
    // axiosInstance
    //   .post('/orders.json', order)
    //   .then((response) => {
    //     console.log(response);
    //     setLoading(false);
    //     // hidden modal
    //     setPurchasing(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //     // hidden modal
    //     setPurchasing(false);
    //   });

    // let queryParams = ingredients.map(
    //   (ingredient, index) => encodeURIComponent(index) + '=' + encodeURIComponent(ingredient)
    // );

    let queryParams = [];

    for (const ingredient in ingredients) {
      // i => salad and so on
      queryParams.push(encodeURIComponent(ingredient) + '=' + encodeURIComponent(ingredients[ingredient]));
      // or we can do this
      // queryParams.push(ingredient + '=' + ingredients[ingredient]);
    }

    let queryString = queryParams.join('&');

    console.log(queryParams);

    // send ingredients in state or in url as search like that ?bacon=1&cheese=1&meat=1&salad=1
    navigate({ pathname: '/checkout', search: `?${queryString}` }, { state: { ingredients } });
    // or we can do this
    // navigate(`/checkout?${queryString}`, { state: { ingredients } });
  };

  let orderSummaryRender = null;

  let burger = error ? <p>Ingredients Con't Loaded</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
          price={totalPrice}
          ingredients={ingredients}
          ordered={purchaseHandler}
        />
      </>
    );

    orderSummaryRender = (
      <OrderSummary
        purchaseContinued={purchaseContinuedHandler}
        purchaseCanceled={purchaseCancleHandler}
        ingredients={ingredients}
        totalPrice={totalPrice}
      />
    );
  }

  if (loading) {
    orderSummaryRender = <Spinner />;
  }

  return (
    <Auxiliary>
      {console.log('*************************************')}
      {console.log('render => BurgerBuilder')}
      {console.log(`showModal: ${purchasing} => BurgerBuilder`)}
      {console.log('*************************************')}
      <Modal show={purchasing} modalClocsed={purchaseCancleHandler}>
        {orderSummaryRender}
      </Modal>
      {burger}
    </Auxiliary>
  );
};

export default withErrorHandler(BurgerBuilder, axiosInstance);
