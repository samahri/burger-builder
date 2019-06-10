import React from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredient.css';


class Ingredient extends React.Component {
    render() {
        let burgerIngredient = null;

        // any alternatives to using a switch statement?
        switch (this.props.type) {  
            case('bread-bottom'):
                burgerIngredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                burgerIngredient = 
                (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                burgerIngredient = <div className={classes.Meat}></div>
                break;
            case('cheese'):
                burgerIngredient = <div className={classes.Cheese}></div>
                break;
            case('salad'):
                burgerIngredient = <div className={classes.Salad}></div>
                break;
            case('bacon'):
                burgerIngredient = <div className={classes.Bacon}></div>
                break;
            }

        return burgerIngredient;
    }
}

// enforce that props.type is passed as a string as opposed to null
Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient;