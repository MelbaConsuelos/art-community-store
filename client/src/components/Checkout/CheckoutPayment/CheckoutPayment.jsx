/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Layout, Typography, Card, Avatar, Image, Button,
} from 'antd';
import {
  CheckCircleOutlined, ArrowRightOutlined, CaretRightOutlined,
} from '@ant-design/icons';
import PageHeader from '../../PageHeader/PageHeader';
import ShoppingCartItem from '../../ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import StripeCheckout from '../StrpCheckout';
import {
  getLocalCart, deleteFromCart, updateCart,
} from '../../../actions/cartActions';
import { getUser } from '../../../actions/userActions';
import { checkout } from '../../../actions/orderActions';

import '../Checkout.scss';

const { Title, Text } = Typography;
const { Meta } = Card;
const { Content, Footer } = Layout;
const shortid = require('shortid');

class CheckoutPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getLocalCart(),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const cartItems = getLocalCart();
    const user = (window.location.pathname).split('/');
    const userId = user[2];
    console.log(userId);
    const currUser = this.props.getUser(userId);
    console.log(currUser);
    this.setState({ user: currUser, cart: cartItems });
  }

  render() {
    // const history = useHistory();
    const { items } = this.state.cart.cart || [];
    const cartItems = getLocalCart();
    const user = (window.location.pathname).split('/');
    const userId = user[2];

    const newCartId = shortid.generate();

    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {this.props.order?.orders[0]
              ? (
                <div className="checkout-content-order">
                  <div className="checkout-confirmation">
                    <CheckCircleOutlined style={{ fontSize: '72px', marginBottom: '24px' }} />
                    <Title level={3}>Gracias por tu compra</Title>
                    <Title level={4}>
                      Nos contactaremos contigo de 1-3 días
                      hábiles para el seguimiento de tu pedido.
                    </Title>
                    <Title level={5}>Detalles de la orden:</Title>
                    <div className="checkout-order-email">
                      <Text>
                        Correo:
                        {' '}
                        {this.props.order?.orders[0].client_email}
                      </Text>
                    </div>
                    <br />
                    <div className="checkout-order-items">
                      <Text>
                        Productos:
                      </Text>
                      <br />
                      {this.props.order?.orders[0].items && (
                        this.props.order?.orders[0].items.map((item) => (
                          <Text>
                            {item.name}
                            {' '}
                            x
                            {' '}
                            {item.quantity}
                          </Text>
                        )))}
                    </div>
                    <br />
                    <div className="checkout-order-total">
                      <Text>
                        Total:
                        {' '}
                        $
                        {this.props.order?.orders[0].bill}
                      </Text>
                    </div>
                  </div>
                </div>
              )
              : (
                <div className="checkout-content">
                  <div className="checkout-cart">
                    <div className="checkout-title">
                      <Title level={3}>Resumen de Productos:</Title>
                      {console.log(this.state)}
                    </div>
                    <div className="checkout-items">
                      {items && (items.map((item) => (
                        <Card
                          style={{ width: 480 }}
                          bodyStyle={{
                            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 480,
                          }}
                          className="item-card"
                        >
                          <div className="item-product">
                            <Meta
                              avatar={<Avatar shape="square" size="large" src={<Image src={item.productImage} style={{ size: 64 }} />} />}
                              title={item.name}
                              description={`$${item.price}`}
                            />
                          </div>
                          <div className="item-quantity">
                            <div className="item-quantity-num">
                              {item.quantity}
                            </div>
                          </div>
                        </Card>
                      )))}
                      <div className="checkout-bill">
                        {/* <div className="checkout-bill-subtotal">
                      <Title className="checkout-bill-text" level={5}>Subtotal:</Title>
                      <Title level={5}>
                        $
                        { this.state.cart.cart ? (this.state.cart.cart.bill) : ('calculando...')}
                      </Title>
                    </div> */}
                        <div className="checkout-bill-total">
                          <Title className="checkout-bill-text" level={4}>Total:</Title>
                          <Title level={4}>
                            $
                            { this.state.cart.cart && this.state.cart.cart.bill}
                          </Title>
                        </div>
                      </div>
                    </div>
                    {console.log(this.state.cart.cart)}
                    {this.state.user?.userId && (
                    <Button
                      icon={<ArrowRightOutlined />}
                      size="large"
                      href="/checkout-payment"
                      onClick={async () => {
                        await this.props.addToCart(newCartId,
                          this.state.cart.cart);
                      }}
                    >
                      Continuar al pago
                    </Button>
                    )}

                  </div>
                  <div className="checkout-payment">
                    <div className="checkout-title">
                      <Title level={3}>Pago con Stripe</Title>
                    </div>
                    <div className="checkout-stripe">
                      <StripeCheckout
                        user={userId}
                        amount={this.state.cart.cart && this.state.cart.cart.bill}
                        checkout={this.props.checkout}
                      />
                    </div>
                  </div>
                </div>
              )}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
  order: state.order,
});

export default connect(mapStateToProps, {
  deleteFromCart, updateCart, getLocalCart, getUser, checkout,
})(CheckoutPayment);
