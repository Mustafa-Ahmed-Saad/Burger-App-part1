import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from './styles.module.css';
import { PropTypes } from 'prop-types';

const Burger = ({ ingredients }) => {
  //ingredients  =>  // {salad: 2, bancon: 1, ....}

  // solution 1 main
  // u will make big array and insid it small arrays else small array have component that repet independant on number of props like number of meet or number of salad
  // ['salad', 'bancon', 'cheese', 'meat']
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) =>
      // ['indefind', 'undefind']
      [...Array(ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
    )
    // .reduce((prevArr, currArr) => prevArr.concat(currArr), []);
    .reduce((prevArr, currArr) => prevArr.concat(currArr), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>;
  }

  // before reducer [ [<component type='salad' />] , [<component type='meet' /> , <component type='meet' />] , [....] , [....] ]
  // after reducer [ <component type='salad' /> , <component type='meet' /> , <component type='meet' /> , .... ]

  // solution 2 inested of reducer to add array to another
  // let mm = [];
  // transformedIngredients.forEach((arr) => {
  //   mm = [...mm, ...arr];
  // });
  // console.log(mm);

  // solution 2 main best solution
  // let transformedIngredients = [];
  // let kk = [];
  // for (let ingredient in ingredients) {
  //   kk = [...Array(ingredients[ingredient])].map((_, i) => {
  //     return <BurgerIngredient key={ingredient + i} type={ingredient} />;
  //   });
  //   transformedIngredients = [...transformedIngredients, ...kk];
  // }
  // console.log(transformedIngredients);

  // solution 3 main
  // let transformedIngredients = [];
  // for (let ingredient in ingredients) {
  //   [...Array(ingredients[ingredient])].forEach((_, i) => {
  //     transformedIngredients.push(<BurgerIngredient key={ingredient + i} type={ingredient} />);
  //   });
  //   // type ingredient
  //   // number ingredients[ingredient]
  // }
  // transformedIngredients = transformedIngredients.map((el) => el);

  // solution 4 main if data like this salad=1  bacon=1  meat=2  cheese=2
  // if data from props like this
  // let salad = 1;
  // let bacon = 1;
  // let cheese = 2;
  // let meat = 2;
  // // my variavles
  // let Nums = [salad, bacon, cheese, meat];
  // let types = ['salad', 'bacon', 'cheese', 'meat'];
  // let ingredientElements = [];

  // Nums.forEach((typeNum, i) => {
  //   maker(types[i], typeNum);
  // });

  // function maker(type, num) {
  //   for (let i = 0; i < num; i++) {
  //     ingredientElements = [...ingredientElements, <BurgerIngredient key={type + i} type={type} />];
  //   }
  // }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object,
};

export default Burger;
