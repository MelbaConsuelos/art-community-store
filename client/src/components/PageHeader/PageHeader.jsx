/* eslint-disable max-len */
/* eslint-disable no-implied-eval */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import {
  ShoppingCartOutlined, MinusOutlined, PlusOutlined, DeleteOutlined,
} from '@ant-design/icons';
import {
  Layout, Modal, Button, Typography, Card, Avatar, Image,
} from 'antd';
import { getCart, deleteFromCart, updateCart } from '../../actions/cartActions';
import './PageHeader.scss';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';

const { Meta } = Card;

const { Header } = Layout;
const { Title } = Typography;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getCart(),
      isModalVisible: false,
    };
  }

  componentDidMount() {
    const cartItems = getCart();
    this.setState({ cart: cartItems });
  }

  render() {
    const showModal = () => {
      const cartItems = getCart();
      this.setState({ isModalVisible: true, cart: cartItems });
    };

    const handleOk = () => {
      setTimeout(window.location.href = '/checkout', 0);
    };

    // const handleUpdate() => {

    // }

    const handleCancel = () => {
      this.setState({ isModalVisible: false });
    };
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <a href="/">
          <div className="logo" />
        </a>
        <div className="headerButtons">
          <div>
            <Button className="headerButtons-shoppingCart" type="primary" size="large" shape="circle" icon={<ShoppingCartOutlined />} onClick={showModal} />
          </div>
          <div>
            <Button className="headerButtons-login" size="large" shape="round" href="/login">Ingresar</Button>
          </div>
          <div>
            <Button className="headerButtons-signup" type="primary" size="large" shape="round" href="/signup">
              Crear Cuenta
            </Button>
          </div>
        </div>
        <Modal title="Carrito" visible={this.state.isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Proceder al Pago" cancelText="Cerrar">
          {(this.state.cart) && (this.state.cart.cart.items.map((item) => (
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
          <div className="shopCart-footer">
            <Title level={4}>Total:</Title>
            <Title level={5}>
              $
              {this.state.cart && this.state.cart.cart.bill}
            </Title>
          </div>
          {console.log('modal', this.state)}
        </Modal>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { getCart, deleteFromCart, updateCart })(PageHeader);
