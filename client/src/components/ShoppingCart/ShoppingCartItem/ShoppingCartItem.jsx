/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

class ShoppingCartItem extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={`$${this.props.item.price}`}
          description={this.props.item.name}
        />
        {this.props.item.quantity}
      </Card>
    );
  }
}
export default ShoppingCartItem;
