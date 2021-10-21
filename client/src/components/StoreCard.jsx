import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {
  Layout, Card, Button, Avatar, Typography,
} from 'antd';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class StoreCard extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
        cover={(
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
      )}
        actions={[
          <Button className="card-button" size="large" href="/store">Ingresar</Button>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Nombre de la tienda"
          description="Nombre del artista"
        />
      </Card>
    );
  }
}
export default StoreCard;
