/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Layout,
} from 'antd';
import PageHeader from '../PageHeader/PageHeader';
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import { getItems } from '../../actions/itemActions';
import { getCart } from '../../actions/cartActions';

const { Content, Footer } = Layout;

class Checkout extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getItems();
    this.props.getCart();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {items && (items.map((item) => (
              <ShoppingCartItem item={item} />
            )))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Checkout);
