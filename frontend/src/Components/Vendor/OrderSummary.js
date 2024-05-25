import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);


  // Fetch orders from backend API
  useEffect(() => {
    // const orderId=JSON.parse(localStorage.getItem("order"))
    // const orderId1=orderId.id;
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5000/ordersummary`);
        const data = await response.json();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  

  const columns = [
    {
      title: 'Order ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'shippingAddress.fullName', // Use render function for nested properties
      key: 'shippingAddress',
      render: (_, record) => record.shippingAddress.fullName,
    },
    {
      title: 'Is Delivered',
      dataIndex: 'isDelivered',
      key: 'isDelivered',
      render: (_, record) => record.isDelivered ? 'Yes' : 'No',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleEdit(record)}>Edit</Button>
      ),
    },
  ];


  const handleEdit = async (order) => {
    try {
      const confirmEdit = window.confirm('Are you sure you want to mark this order as delivered?');
      if (!confirmEdit) {
        return; // User cancelled the edit
      }
      // Send a request to your backend API to update the order status
      const response = await fetch(`http://localhost:5000/updateorder/${order._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isDelivered: true }), // Assuming you want to mark the order as delivered
      });
  
      if (response.ok) {
        // Update the local state with the modified orders array
        setOrders(prevOrders => prevOrders.map(prevOrder => {
          if (prevOrder._id === order._id) {
            return { ...prevOrder, isDelivered: true };
          }
          return prevOrder;
        }));
      } else {
        console.error('Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };
  


  return (
    <div>
      <Table dataSource={orders} columns={columns} />
    </div>
  );
};

export default OrderSummary;
