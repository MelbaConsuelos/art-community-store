import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  Layout, Card, Button, Avatar, Typography,
} from 'antd';

import Patos from '../../assets/patos.jpg';

const { Title, Text } = Typography;
const { Meta } = Card;

class ProductCard extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={(
          <img
            alt="example"
            src={Patos}
          />
      )}
        actions={[
          <Text>$50.00</Text>,
          <Button className="headerButtons-shoppingCart" type="primary" size="large" shape="circle" icon={<ShoppingCartOutlined />} />,
        ]}
      >
        <Meta
          title="Patitos Cute"
          description="Plantilla de 5 stickers"
        />
      </Card>
    );
  }
}
export default ProductCard;
