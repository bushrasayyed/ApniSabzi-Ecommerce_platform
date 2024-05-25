import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from './screens/Store';

function Product(props) {
    const {product}=props;

    const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/viewproduct/${item._id}`);
    // if (data.countInStock < quantity) {
    //   window.alert('Sorry. Product is out of stock');
    //   return;
    // }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card >
    <Link to={`/product/${product._id}`}>
    <img src={`http://localhost:5000/${product.image}`} className="card-img-top" alt={product.name}/>

    </Link>
    <Card.Body>
    <Link to={`/product/${product._id}`}>
        <Card.Title>{product.name}  </Card.Title>
      </Link>
    <Card.Text>
      {product.description}
      <Rating rating={product.rating} />
    {product.price}₹
    </Card.Text>
      <Button onClick={() => addToCartHandler(product)}> Add to cart</Button>
    
    </Card.Body>
   </Card>
  )
}

export default Product ;





