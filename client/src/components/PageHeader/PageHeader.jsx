import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Breadcrumb, Button } from 'antd';
import './PageHeader.scss';

const { Header, Content, Footer } = Layout;

class PageHeader extends React.Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <a href="/home">
          <div className="logo" />
        </a>
        <div className="headerButtons">
          <div>
            <Button className="headerButtons-shoppingCart" type="primary" size="large" shape="circle" icon={<ShoppingCartOutlined />} />
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
      </Header>
    );
  }
}
export default PageHeader;
