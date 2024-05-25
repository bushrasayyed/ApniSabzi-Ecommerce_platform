import React, { useState, useEffect } from 'react';
import { List, Card, Input } from 'antd';
import {Button} from 'react-bootstrap';
import { Store } from './Store';
import { useContext } from 'react';

const { Search } = Input;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/viewproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setAllProducts(data); // Set all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };


  const searchProduct = async (query) => {
    setLoading(true);
    try {
      let url = 'http://localhost:5000/viewproducts';
      if (query) {
        url = `http://localhost:5000/searchproduct?q=${query}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
    setLoading(false);
  };

  const handleSearch = (value) => {
    searchProduct(value);
  };

  const handleResetSearch = () => {
    setProducts(allProducts); // Reset products to all products
  };
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity+ 1 : 1;
    
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  return (
    <div style={{ padding: '20px' }}>
      <Search
        placeholder="Search products"
        onSearch={handleSearch}
        enterButton
        style={{ width: 300, marginBottom: 16 }}
      />
      {products.length > 0 && (
        <p>
          <button onClick={handleResetSearch}>Show All Products</button>
        </p>
      )}
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={products}
        loading={loading}
        renderItem={(product) => (
          <List.Item>
            <Card
              title={product.name}
              hoverable
              style={{ width: 240 }}
              cover={<img src={`http://localhost:5000/${product.image}`} alt={product.name} style={{ height: 180, objectFit: 'cover' }} />}
            >
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <Button onClick={() => addToCartHandler(product)}> Add to cart</Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductList;
