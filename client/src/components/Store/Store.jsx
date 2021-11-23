/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import 'antd/dist/antd.css';
import {
  Layout,
} from 'antd';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import { addToCart } from '../../actions/cartActions';
import PageHeader from '../PageHeader/PageHeader';
import StoreHeader from './StoreHeader';
import ProductCard from './ProductCard';

const { Content, Footer } = Layout;

class Store extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getItems();
  }

  render() {
    const onAddToCart = async (id, productId) => {
      await this.props.addToCart(id, productId, 1);
      alert('Item added to Cart');
    };

    // eslint-disable-next-line react/destructuring-assignment
    const { items } = this.props.item;
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <StoreHeader />
            <div className="featured-stores">
              {items && items.map((item) => (
                <div className="featured-stores-card">
                  <ProductCard item={item} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
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

export default connect(mapStateToProps, { getItems, addToCart })(Store);
