import React ,{useState, useEffect} from 'react'
import { Space, Table, Typography ,Button, Popconfirm,message} from "antd";
import { DeleteOutlined } from '@ant-design/icons';
const Vendors = () => {
  const [vendor, setVendor] = useState([]);
  // Function to fetch vendor data from the backend API
  const fetchVendors = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetchvendor');
      if (response.ok) {
        const data = await response.json();
        setVendor(data);
      } else {
        console.error('Failed to fetch vendor data');
      }
    } catch (error) {
      console.error('Error fetching vendor data:', error);
    }
  };
  // Function to handle delete action
  const handleDelete = async(record) => {
    try {
      const response = await fetch(`http://localhost:5000/deletevendor/${record._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        message.success('Vendor deleted successfully');
        // Filter out the deleted vendor from the state
        setVendor(prevVendors => prevVendors.filter(v => v._id !== record._id));
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete vendor');
      }
    } catch (error) {
      console.error('Error deleting vendor:', error);
      message.error(error.message || 'Failed to delete vendor');
    }
  };

  // Fetch vendors data when the component mounts
  useEffect(() => {
    fetchVendors();
  }, []); 

  return (
    <>
    <div>
        <Space size={20} direction="vertical">
      <Typography.Title level={4}>Vendors</Typography.Title>
      <Table
        // loading={loading}
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Email', dataIndex: 'email' },
          { title: 'Shop', dataIndex: 'shopName' },
          { title: 'Address', dataIndex: 'address' },
          {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: (_, record) => (
              <Popconfirm
                title="Are you sure you want to delete this vendor?"
                onConfirm={() => handleDelete(record)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" size="small" icon={<DeleteOutlined />}>
        Delete
      </Button>
              </Popconfirm>
            ),
          },
        ]}
        dataSource={vendor} // Use the vendor state as the data source
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
    </div>
    </>
  )
}

export default Vendors;

