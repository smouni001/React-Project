import React from 'react';

import Aux from '../../../hoc/WithClass';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    

    const ingredientSummary = Object.keys( props.ingredients )
  //const ingredientSummary = ingredientSummary2
        .map( igKey => {
            const b = props.ingredients[igKey];
            if (b >0 ){
            return (

               
                <li key={igKey } >
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>: {props.ingredients[igKey]}
                </li> );}else return null;
        } );

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
                <p> Le prix total est : <strong>{props.price.toFixed(2)} £</strong></p>
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;