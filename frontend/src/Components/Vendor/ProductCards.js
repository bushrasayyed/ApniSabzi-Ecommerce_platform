import React, { useState, useEffect } from "react";
import { message } from 'antd';
import "./Prod.css";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [newQuantity, setNewQuantity] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const fetchData = async (userId) => {
      try {
        const response = await fetch(
          `http://localhost:5000/viewproduct/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(userId);
  }, []);
  const handleEdit= async(productId)=>{
    try {
      const response = await fetch(`http://localhost:5000/updateproductquantity/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: newQuantity })
      });
      if (response.ok) {
        // Update the product quantity in the state
        setProducts(prevProducts => prevProducts.map(product => {
          if (product._id === productId) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        }));
        message.success('Product quantity updated successfully');
      } else {
        console.error('Failed to update product quantity');
        message.error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }

  }
  const handleDelete= async(productId)=>{
    try {
      const response = await fetch(`http://localhost:5000/deleteproduct/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted product from the products state
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
        message.success('Product deleted successfully');
      } else {
        message.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }

  }

  return (
    <div className="product-cards-container">
      {" "}
      {/* Apply container class */}
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          {/* <img src={product.image} alt={product.name} /> */}
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
          />
          {/* {console.log(`http://localhost:5000/${product.image}`)} */}
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <div className="product-actions">
            {editingProductId === product._id ? (
                <>
                  <input 
                    type="number" 
                    value={newQuantity} 
                    onChange={(e) => setNewQuantity(e.target.value)} 
                    placeholder="New Quantity" 
                  />
                  <button className="edit-button" onClick={() => handleEdit(product._id)}>Save</button>
                </>
              ) : (
                <button className="edit-button" onClick={() => setEditingProductId(product._id)}>Edit</button>
              )}
              <button className="delete-button"onClick={() => (handleDelete(product._id))}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
