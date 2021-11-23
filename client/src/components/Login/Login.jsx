import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Login.scss';
import {
  Layout, Breadcrumb, Button, Typography, Form, Input, Checkbox,
} from 'antd';
import PageHeader from '../PageHeader/PageHeader';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Title className="login-title">Ingresa a tu Cuenta</Title>
            <div className="login-container">
              <Form
                className="loginForm"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: false }}
                autoComplete="off"
              >
                <Form.Item
                  label="Correo"
                  name="email"
                  rules={[{ required: true, message: 'Ingresa tu correo' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Contraseña"
                  name="password"
                  rules={[{ required: true, message: 'Ingresa tu contraseña' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                  <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Ingresar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default Login;
