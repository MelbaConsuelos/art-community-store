import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  Layout, Breadcrumb, Button, Typography, Form, Input, Checkbox,
} from 'antd';
import PageHeader from '../PageHeader/PageHeader';
import StoreHeader from './StoreHeader';
import ProductCard from './ProductCard';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class Store extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <StoreHeader />
            <div className="featured-stores">
              <div className="featured-stores-card">
                <ProductCard />
              </div>
              <div className="featured-stores-card">
                <ProductCard />
              </div>
              <div className="featured-stores-card">
                <ProductCard />
              </div>
              <div className="featured-stores-card">
                <ProductCard />
              </div>
              <div className="featured-stores-card">
                <ProductCard />
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default Store;
