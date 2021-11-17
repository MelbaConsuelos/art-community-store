import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Modal, Button } from 'antd';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const { Header, Content, Footer } = Layout;

class ShoppingCartModal extends React.Component {
  render() {
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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </Modal>

    );
  }
}
export default ShoppingCartModal;
