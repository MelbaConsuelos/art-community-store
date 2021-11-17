import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {
  Layout, Card, Button, Avatar, Typography,
} from 'antd';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class ShoppingCartItem extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="$12.00"
          description="Tres stickers de gatito"
        />
      </Card>
    );
  }
}
export default ShoppingCartItem;
