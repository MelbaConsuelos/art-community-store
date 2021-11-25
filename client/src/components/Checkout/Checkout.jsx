/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Layout, Typography,
} from 'antd';
import PageHeader from '../PageHeader/PageHeader';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import AddressForm from './AddressForm/AddressForm';
import StripeCheckout from './StrpCheckout';
import { getCart } from '../../actions/cartActions';

import './Checkout.scss';

const { Title, Text } = Typography;

const { Content, Footer } = Layout;

class Checkout extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getCart('12');
  }

  render() {
    const onToken = (user, checkout) => (token) => checkout(user, token.id);
    const { items } = this.props.cart.cart || [];
    const { shipping } = 0;
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="checkout-content">
              <div className="checkout-address">
                <div className="checkout-title">
                  <Title level={3}>Dirección de Envío</Title>
                </div>
                <AddressForm />
              </div>
              <div className="checkout-cart">
                <div className="checkout-title">
                  <Title level={3}>Productos</Title>
                </div>
                <div className="checkout-items">
                  {items && (items.map((item) => (
                    <ShoppingCartItem item={item} user="12" />
                  )))}
                  <div className="checkout-bill">
                    <div className="checkout-bill-subtotal">
                      <Title className="checkout-bill-text" level={5}>Subtotal:</Title>
                      <Title level={5}>
                        $
                        { this.props.cart.cart && this.props.cart.cart.bill}
                      </Title>
                    </div>
                    <div className="checkout-bill-shipping">
                      <Text className="checkout-bill-text" type="secondary">Costo de Envío:</Text>
                      <Text type="secondary">{shipping}</Text>
                    </div>
                    <div className="checkout-bill-total">
                      <Title className="checkout-bill-text" level={4}>Total:</Title>
                      <Title level={4}>
                        $
                        { this.props.cart.cart && this.props.cart.cart.bill + shipping}
                      </Title>
                    </div>
                  </div>
                </div>
                <div className="checkout-stripe">
                  <StripeCheckout
                    user="12"
                    amount={this.props.cart.cart && this.props.cart.cart.bill}
                    checkout={this.props.checkout}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { getCart })(Checkout);
