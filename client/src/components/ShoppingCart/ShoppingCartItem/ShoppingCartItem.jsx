/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import {
  Card, Avatar, Image, Button,
} from 'antd';

import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteFromCart, addToCart, updateCart } from '../../../actions/cartActions';

import './ShoppingCartItem.scss';

const { Meta } = Card;

class ShoppingCartItem extends React.Component {
  render() {
    const { cart } = this.props.cart;
    return (
      <Card
        style={{ width: 480 }}
        bodyStyle={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 480,
        }}
        className="item-card"
      >
        <div className="item-product">
          <Meta
            avatar={<Avatar shape="square" size="large" src={<Image src={this.props.item.productImage} style={{ size: 64 }} />} />}
            title={this.props.item.name}
            description={`$${this.props.item.price}`}
          />
        </div>
        <div className="item-quantity">
          {this.props.item.quantity === 1 ? (
            <Button
              className="item-quantity-button"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={async () => {
                await this.props.deleteFromCart(this.props.item.productId);
              }}
            />
          ) : (
            <Button
              className="item-quantity-button"
              shape="circle"
              icon={<MinusOutlined />}
              onClick={async () => {
                // eslint-disable-next-line max-len
                await this.props.updateCart(this.props.item.productId, this.props.item.quantity - 1);
              }}
            />
          )}

          <div className="item-quantity-num">
            {this.props.item.quantity}
          </div>
          <Button
            className="item-quantity-button"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={async () => {
              // eslint-disable-next-line max-len
              await this.props.updateCart(this.props.item.productId, this.props.item.quantity + 1);
            }}
          />
        </div>
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
// eslint-disable-next-line max-len
export default connect(mapStateToProps, { addToCart, deleteFromCart, updateCart })(ShoppingCartItem);
