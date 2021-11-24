/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import 'antd/dist/antd.css';
import {
  Layout, List,
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
              <List
                grid={{
                  gutter: 8,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 2,
                  xl: 3,
                  xxl: 4,
                }}
                dataSource={items}
                renderItem={(item) => (
                  <List.Item>
                    <ProductCard className="products-card" item={item} onAddToCart={onAddToCart} />
                  </List.Item>
                )}
              />
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
