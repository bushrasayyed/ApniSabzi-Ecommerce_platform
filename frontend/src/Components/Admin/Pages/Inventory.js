import React,{useState, useEffect} from 'react'
import { Rate, Space, Table, Typography, Button } from "antd";
const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://localhost:5000/viewproducts');
      if (response.ok) {
        const data = await response.json();
        setInventory(data);
      } else {
        console.error('Failed to fetch inventory data');
      }
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
  return (
      <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        // loading={loading}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Description", dataIndex: "description" },
          { title: "Price", dataIndex: "price", render: (value) => <span>₹{value}</span> },
          { title: "Rating", dataIndex: "rating", render: (rating) => <Rate value={rating} allowHalf disabled /> },
          // { title: "Stock", dataIndex: "quantity", render: (value) => <span>{value}</span> },
          {
            title: 'Stock',
            dataIndex: 'quantity',
            render: (quantity) => (
              <span>
                {quantity > 0 ? (
                  <>
                    <span>{quantity} kg</span>
                    <Button type="primary">In Stock</Button>
                  </>
                ) : (
                  <Button type="danger">Out of Stock</Button>
                )}
              </span>
            ),
          },
        ]}
        dataSource={inventory}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
   
  )
}

export default Inventory


