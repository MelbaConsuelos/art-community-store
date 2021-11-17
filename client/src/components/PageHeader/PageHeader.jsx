/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Modal, Button } from 'antd';
import './PageHeader.scss';

const { Header, Content, Footer } = Layout;

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <a href="/home">
          <div className="logo" />
        </a>
        <div className="headerButtons">
          <div>
            {/* // eslint-disable-next-line react/destructuring-assignment */}
            <Button className="headerButtons-shoppingCart" type="primary" size="large" shape="circle" icon={<ShoppingCartOutlined />} onClick={() => this.setState({ isModalVisible: true })} />
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
        {/* // eslint-disable-next-line react/destructuring-assignment */}
        <Modal title="Basic Modal" visible={this.state.isModalVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Header>
    );
  }
}
export default PageHeader;
