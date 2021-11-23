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

const PageHeader = ({ items }) => {
  useEffect(() => {
    getCart();
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {console.log(items)}
        {items.cart && items.cart.items.map((item) => (
          <ShoppingCartItem item={item} />
        ))}
      </Modal>
    </Header>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart,
});

export default connect(mapStateToProps, { getCart })(PageHeader);
