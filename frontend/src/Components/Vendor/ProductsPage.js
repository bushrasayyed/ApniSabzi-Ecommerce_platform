
import React from 'react';
import { Layout } from 'antd';
import ProductCards from './ProductCards';

const { Content } = Layout;

const ProductsPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <ProductCards />
        </div>
      </Content>
    </Layout>
  );
};

export default ProductsPage;
