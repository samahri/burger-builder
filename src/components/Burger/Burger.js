import React from 'react';

import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient.js';


const burger = (props) => {
    // can't loop over an object
    let transformedIngredients = Object.keys(props.ingredients) // returns an array of the keys
                                            .map(igKey => {
                                                return [...Array(props.ingredients[igKey])]
                                                            .map((_, i) => {
                                                                return <Ingredient key={igKey + i} type={igKey}/>;
                                                            })
                                            }).reduce((arr, el) => {
                                                return arr.concat(el);
                                            }, []);

                        
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/> 
        </div>
    );
};

export default burger;