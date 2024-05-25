import React,{useState,useEffect}  from 'react'
import { Space, Table, Typography } from "antd";

const Customers = () => {
    // const [loading, setLoading] = useState(false);
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
      // Fetch order history from backend API
      const fetchCustomers = async () => {
        try {
          const response = await fetch('http://localhost:5000/getusers');
          const data = await response.json();
          console.log(data)
          setCustomer(data);
        } catch (error) {
          console.error('Error fetching order history:', error);
        }
      };
      fetchCustomers();
    }, []);
   
  return (
    <div>
       <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        // loading={loading}
        columns={[
          {
            title: 'Name',
            dataIndex: 'shippingAddress',
            render: (shippingAddress) => shippingAddress.fullName,
          },
          {
            title: 'Phone',
            dataIndex: 'shippingAddress',
            render: (shippingAddress) => shippingAddress.contactNo,
          },
          {
            title: 'Address',
            dataIndex: 'shippingAddress',
            render: (shippingAddress) => shippingAddress.address,
          },
          {
            title: 'Payment Status',
            dataIndex: 'isPaid',
            render: (isPaid) => (isPaid ? 'Paid' : 'Not Paid'),
          },
        ]}
        dataSource={customers}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>
  )
}

export default Customers
