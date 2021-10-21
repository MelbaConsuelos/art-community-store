import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

import {
  Layout, Breadcrumb, Button, Typography, Form, Input, Checkbox,
} from 'antd';
import PageHeader from './PageHeader/PageHeader';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class Signup extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Title className="singup-title">Te interesa anunciar tus productos en nuestra plataforma?</Title>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default Signup;
