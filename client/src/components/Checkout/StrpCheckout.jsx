/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_wk6O7Cc5k3McBIG2Hut2irGs';

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency="MXN"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
