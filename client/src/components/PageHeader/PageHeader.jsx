/* eslint-disable no-implied-eval */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Modal, Button } from 'antd';
import { getCart } from '../../actions/cartActions';
import './PageHeader.scss';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';

const { Header } = Layout;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.props.getCart('12');
  }

  render() {
    const showModal = () => {
      this.setState({ isModalVisible: true });
    };

    const handleOk = () => {
      setTimeout(window.location.href = '/checkout', 0);
    };

    const handleCancel = () => {
      this.setState({ isModalVisible: false });
    };
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <a href="/home">
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
          {this.props.cart && (this.props.cart.items.map((item) => (
            <ShoppingCartItem item={item} user="12" />
          )))}
          {/* <div className="shopCart-noItems">
              <p> Parece que no has agregado nada aún :(</p>
              <Button
              className="headerButtons-signup"
              type="primary" size="large" shape="round" href="/store">
                Visitar la Tienda
              </Button>
            </div> */}
        </Modal>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart,
});

export default connect(mapStateToProps, { getCart })(PageHeader);
