/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom';

const STRIPE_PUBLISHABLE = 'pk_test_wk6O7Cc5k3McBIG2Hut2irGs';

const onToken = (user, cart, checkout) => (token) => checkout(user, cart, token.id);

const Checkout = ({
  amount, user, cart, checkout, history,
}) => (
  <StripeCheckout
    amount={amount * 100}
    token={async () => {
      await onToken(user, cart, checkout);
      alert('Orden creada con éxito! Porfavor espera de 2-5 días hábiles para que te contactemos');
    }}
    currency="MXN"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
