import React, { useState, useEffect } from 'react';
import { Table} from 'antd';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    // const [loading, setLoading] = useState(false);

   
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
            setInventory(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchData(userId);
      }, []);

    const columns = [
        {
            title: 'Product ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, record) => record.quantity,
        },
    ];

   

    return (
        <div>
            <h1>Inventory Management</h1>
            <Table dataSource={inventory} columns={columns} />
        </div>
    );
};

export default Inventory;
