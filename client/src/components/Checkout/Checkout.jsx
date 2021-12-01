/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Layout, Typography, Card, Avatar, Image, Button,
} from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import PageHeader from '../PageHeader/PageHeader';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import AddressForm from './AddressForm/AddressForm';
import StripeCheckout from './StrpCheckout';
import { getCart, deleteFromCart, updateCart } from '../../actions/cartActions';

import './Checkout.scss';

const { Title, Text } = Typography;
const { Meta } = Card;
const { Content, Footer } = Layout;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getCart(),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const cartItems = getCart();
    this.setState({ cart: cartItems });
  }

  render() {
    const { items } = this.state.cart.cart || [];
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
                            onClick={async () => {
                              await this.props.deleteFromCart(item.productId);
                              const cartItems = getCart();
                              this.setState({ cart: cartItems });
                            }}
                          />
                        ) : (
                          <Button
                            className="item-quantity-button"
                            shape="circle"
                            icon={<MinusOutlined />}
                            onClick={async () => {
                              // eslint-disable-next-line max-len
                              await this.props.updateCart(item.productId, -1);
                              const cartItems = getCart();
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
                          onClick={async () => {
                            // eslint-disable-next-line max-len
                            await this.props.updateCart(item.productId, 1);
                            const cartItems = getCart();
                            this.setState({ cart: cartItems });
                          }}
                        />
                      </div>
                    </Card>
                  )))}
                  <div className="checkout-bill">
                    <div className="checkout-bill-subtotal">
                      <Title className="checkout-bill-text" level={5}>Subtotal:</Title>
                      <Title level={5}>
                        $
                        { this.state.cart.cart && this.state.cart.cart.bill}
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
                        { this.state.cart.cart && this.state.cart.cart.bill + shipping}
                      </Title>
                    </div>
                  </div>
                </div>
                <div className="checkout-stripe">
                  <StripeCheckout
                    user="12"
                    amount={this.state.cart.cart && this.state.cart.cart.bill}
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

export default connect(mapStateToProps, { deleteFromCart, updateCart, getCart })(Checkout);
