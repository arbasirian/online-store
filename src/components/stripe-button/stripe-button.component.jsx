import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_pcrfC2SoxGlPBrhtuofzEpab00hPODgU8q';

    const onToken = token => {
        console.log(token);
        alert('Payment Done')

    };
    return(
        <StripeCheckout
            label='Pay now'
            name='Pay in Online Store'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            discription={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PublishableKey}
        />
    )
};

export default StripeCheckoutButton;