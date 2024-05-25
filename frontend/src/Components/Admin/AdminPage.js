import React ,{useEffect,useState}from 'react';
import { Card, Col, Row } from 'antd';
import AdminHeader from './HeaderAdmin';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import Vendors from './Pages/Vendors';
import Customers from './Pages/Customers';

const AdminPage = () => {
  const [customerCount, setCustomerCount] = useState("");
  const [productCount, setProductCount] = useState("");
  const [orderCount, setOrderCount] = useState("");
  // const [product, setProduct] = useState("");
  // const [siteVisitorsCount, setSiteVisitorsCount] = useState(0);
   // Fetch data for customers, orders, and categories when component mounts
useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch customer data
      const response = await fetch('http://localhost:5000/customercount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerCount }),
      });
      const data = await response.json();
      setCustomerCount(data.count);

      /// Fetch product data
     const productResponse = await fetch('http://localhost:5000/productcount', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ productCount }), 
});
const productData = await productResponse.json();
setProductCount(productData.count);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

      /// Fetch order data
      const orderResponse = await fetch('http://localhost:5000/ordercount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderCount }), 
      });
      const orderData = await orderResponse.json();
      setOrderCount(orderData.count);
            
  };

  // const fetchSiteVisitorsCount = async () => {
  //   try {
  //     const response = await fetch('/api/site-visitors');
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSiteVisitorsCount(data.totalVisitors);
  //     } else {
  //       console.error('Failed to fetch site visitors count');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching site visitors count:', error);
  //   }
  // };

  fetchData();
  // fetchSiteVisitorsCount();
}, []);
  
  

  return (
    <div className="AppContainer">
      <AdminHeader />
      <div className="MainContent">
        {/* Cards container */}
        <div className="CardsContainer">
          <Row gutter={[16, 16]}>
            {/* Total users visited site */}
          {/* <Col span={6}>
              <Card
                title="Site Visitors"
                bordered={false}
                style={{ backgroundColor: "#E6E6FA" }}
              >
                <h1 style={{ color: "#333" }}>{siteVisitorsCount}</h1>
              </Card>
            </Col> */}
            {/* Card displaying number of customers */}
            <Col span={8}>
              <Card
                title="Total Customers"
                bordered={false}
                style={{ backgroundColor: "#F3E0DC" }}
              >
                <h1 style={{ color: "#333" }}>{customerCount}</h1>
              </Card>
            </Col>
            {/* Card displaying total products */}
            <Col span={8}>
              <Card
                title="Total Products"
                bordered={false}
                style={{ backgroundColor: "#D5E5E3" }}
              >
                <h1 style={{ color: "#333" }}>{productCount}</h1>
              </Card>
            </Col>
            {/* Card displaying total orders */}
            <Col span={8}>
              <Card
                title="Total Orders"
                bordered={false}
                style={{ backgroundColor: "#F9E79F" }}
              >
                <h1 style={{ color: "#333" }}>{orderCount}</h1>
              </Card>
            </Col>
          </Row>
        </div>
        {/* Content components container */}
        <div className="ContentContainer">
          <div className="component"style={{ backgroundColor: '#B2D996', display: 'grid', placeItems: 'center',height: '500px',width:'400px' }}>
            <Dashboard />
          </div>
          <div className="component"style={{ backgroundColor: '#FFE5EC' , display: 'grid', placeItems: 'center' , height: '500px', width: '400px'}}>
            <Inventory />
          </div>
          <div className="component"style={{ backgroundColor: '#F0E68C' , display: 'grid', placeItems: 'center' , height: '500px', width: '400px'}}>
            <Vendors />
          </div>
          <div className="component"style={{ backgroundColor: '#F5DEB3' , display: 'grid', placeItems: 'center' , height: '500px', width: '400px'}}>
            <Customers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
