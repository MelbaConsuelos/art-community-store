/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Button, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

class ProductCard extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={(
          <img
            alt="example"
            src={this.props.item.product_image}
          />
      )}
        actions={[
          <Text>{`$${this.props.item.price}`}</Text>,
          <Button
            className="headerButtons-shoppingCart"
            type="primary"
            size="large"
            shape="circle"
            icon={<ShoppingCartOutlined />}
            onClick={this.props.onAddToCart.bind(this, '12', this.props.item._id)}
          />,
        ]}
      >
        <Meta
          title={this.props.item.title}
          description={this.props.item.description_long}
        />
      </Card>
    );
  }
}
export default ProductCard;
