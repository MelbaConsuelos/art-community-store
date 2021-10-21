/* eslint-disable global-require */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Homepage.scss';
import {
  Layout, Carousel, Button, Typography,
} from 'antd';
import PageHeader from '../PageHeader/PageHeader';
import StoreCard from '../StoreCard';
import Shark from '../../assets/SHARKGANGZ.png';
import Llaveros from '../../assets/llaveros.jpg';
import Patos from '../../assets/patos.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const contentStyle = {
  height: '240px',
  width: '500px',
  color: '#fff',
  marginLeft: '160px',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class Homepage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="featured">
              <Title className="featured-title">Encuentra todos los productos de tus artistas favoritos</Title>
              <Text className="featured-subtitle" strong>Productos destacados</Text>
              <Carousel className="featured-carousel" autoplay>
                <div>
                  <img src={Shark} alt="shark" style={contentStyle} />
                </div>
                <div>
                  <img src={Llaveros} alt="llaveros" style={contentStyle} />
                </div>
                <div>
                  <img src={Patos} alt="patos" style={contentStyle} />
                </div>
              </Carousel>
              <Text className="featured-subtitle" strong>Tiendas destacadas</Text>
              <div className="featured-stores">
                <div className="featured-stores-card">
                  <StoreCard />
                </div>
                <div className="featured-stores-card">
                  <StoreCard />
                </div>
                <div className="featured-stores-card">
                  <StoreCard />
                </div>
                <div className="featured-stores-card">
                  <StoreCard />
                </div>
                <div className="featured-stores-card">
                  <StoreCard />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}
export default Homepage;
