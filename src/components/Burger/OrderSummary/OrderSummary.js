import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be a class
    // componentWillUpdate(){
    //     console.log('[Order Summary] WillUpdate');
    // }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}: {this.props.ingredients[igKey]}
                    </span>
                </li>
            )
        })

        return(
            <Aux>
                <h3>
                    Your order
                </h3>
                <p>
                    A delicious burger with the following ingredients:
                </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>
                    Continue to checkout?
                </p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;