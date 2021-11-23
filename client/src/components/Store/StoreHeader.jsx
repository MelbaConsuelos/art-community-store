import React from 'react';
import 'antd/dist/antd.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  Image, Avatar, Typography,
} from 'antd';
import Cover from '../../assets/banner.jpg';
import Cary from '../../assets/cary2.PNG';
import './StoreHeader.scss';

const { Title, Text } = Typography;

class StoreHeader extends React.Component {
  render() {
    return (
      <div className="storeHeader">
        <div className="storeHeader-cover">
          <Image className="storeHeader-img" src={Cover} alt="cover" width={1660} height={400} />
        </div>
        <div className="storeHeader-info">
          <Avatar src={<Image src={Cary} />} size={200} />
          <div className="storeHeader-info-text">
            <Title className="storeHeader-info-title"> Cary Moonie </Title>
            <Text>
              Esta es la tienda de CaryMoonie,
              principalmente vende stickers, cases, etc.
            </Text>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreHeader;
