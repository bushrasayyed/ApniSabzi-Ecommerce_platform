import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order history from backend API
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch('http://localhost:5000/ordersummary');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetchOrderHistory();
  }, []);

  const columns = [
    {
      title: 'Order ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (price) => `₹${price.toFixed(2)}`,
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      render: (paymentMethod) => (paymentMethod ? 'Cash' : 'RazorPay'),
    },
    {
      title: 'Is Paid?',
      dataIndex: 'isPaid', // Corrected from 'isDelivered'
      key: 'isPaid',
      render: (isPaid) => (isPaid ? 'Yes' : 'No'),
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
      const confirmEdit = window.confirm('Are you sure you want to mark this order as paid?');
      if (!confirmEdit) {
        return; // User cancelled the edit
      }
      // Send a request to your backend API to update the order status
      const response = await fetch(`http://localhost:5000/updateorder/${order._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPaid: true }),
      });
  
      if (response.ok) {
        // Update the local state with the modified orders array
        setOrders(prevOrders => prevOrders.map(prevOrder => {
          if (prevOrder._id === order._id) {
            return { ...prevOrder, isPaid: true };
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
      <h1>Order History</h1>
      <Table dataSource={orders} columns={columns} />
    </div>
  );
};

export default OrderHistory;
