/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Layout, Typography, Card, Avatar, Image, Button,
} from 'antd';
import {
  MinusOutlined, PlusOutlined, DeleteOutlined, ArrowRightOutlined,
} from '@ant-design/icons';
import PageHeader from '../PageHeader/PageHeader';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import AddressForm from './AddressForm/AddressForm';
import StripeCheckout from './StrpCheckout';
import {
  getLocalCart, deleteFromCart, updateCart, addCart,
} from '../../actions/cartActions';
import { getUser } from '../../actions/userActions';
import { checkout } from '../../actions/orderActions';

import './Checkout.scss';

const { Title, Text } = Typography;
const { Meta } = Card;
const { Content, Footer } = Layout;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getLocalCart(),
      user: getUser(),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const cartItems = getLocalCart();
    const currUser = getUser();
    this.setState({ user: currUser, cart: cartItems });
  }

  render() {
    // const history = useHistory();
    const { items } = this.state.cart.cart || [];

    const handleUserUpdate = (newUser) => {
      this.setState({ user: newUser });
    };

    const handleCreateCart = () => {
      this.props.addCart(this.state.user.userId,
        this.state.cart.cart.items,
        this.state.cart.cart.bill);
    };

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
                <AddressForm handleUserUpdate={handleUserUpdate} />
              </div>
              <div className="checkout-cart">
                <div className="checkout-title">
                  <Title level={3}>Productos</Title>
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
                        {item.quantity === 1 ? (
                          <Button
                            className="item-quantity-button"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={() => {
                              this.props.deleteFromCart(item.productId);
                              const cartItems = getLocalCart();
                              this.setState({ cart: cartItems });
                            }}
                          />
                        ) : (
                          <Button
                            className="item-quantity-button"
                            shape="circle"
                            icon={<MinusOutlined />}
                            onClick={() => {
                              // eslint-disable-next-line max-len
                              this.props.updateCart(item.productId, -1);
                              const cartItems = getLocalCart();
                              this.setState({ cart: cartItems });
                            }}
                          />
                        )}

                        <div className="item-quantity-num">
                          {item.quantity}
                        </div>
                        <Button
                          className="item-quantity-button"
                          shape="circle"
                          icon={<PlusOutlined />}
                          onClick={() => {
                            // eslint-disable-next-line max-len
                            this.props.updateCart(item.productId, 1);
                            const cartItems = getLocalCart();
                            this.setState({ cart: cartItems });
                          }}
                        />
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
                {this.state.user?.userId && (
                <Button
                  icon={<ArrowRightOutlined />}
                  size="large"
                  href={`/checkout-payment/${this.state.user.userId}`}
                  onClick={handleCreateCart}
                >
                  Continuar al pago
                </Button>
                )}
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
  user: state.user,
});

export default connect(mapStateToProps, {
  deleteFromCart, updateCart, getLocalCart, addCart, getUser, checkout,
})(Checkout);
