import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalized'}}>{igKey} : {props.ingredients[igKey]}</span>
               </li>);
    });


    return (
        <Aux>
            <h3>You Order </h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>

        </Aux>
    );
};

export default orderSummary;