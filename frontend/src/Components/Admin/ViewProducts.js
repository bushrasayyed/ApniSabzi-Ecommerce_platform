import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AdminHeader from './HeaderAdmin';
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data when component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/viewproducts');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteproduct/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted product from the products state
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
       <AdminHeader />
    <h1>Products</h1>
    <Row gutter={16}>
    {Array.isArray(products) && products.map(product => (
        <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
          <Card title={product.name}>
          {product.image && (
                <img src={`http://localhost:5000/${product.image}`} alt={product.name} style={{ width: '100%' }} />
              )}
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>Quantity:{product.quantity}kg</p>
            <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(product._id)}
              />
          </Card>
        </Col>
      ))}
    </Row>
    
  </div>
  );
};

export default ProductsPage;
