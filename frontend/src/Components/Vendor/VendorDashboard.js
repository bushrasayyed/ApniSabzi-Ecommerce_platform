import React, { useState, useEffect } from 'react';
import { Layout, Menu} from 'antd';
import {useNavigate } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ProductForm from './ProductForm';
import ProductsPage from './ProductsPage';
import FAQSection from './FAQSection';
import OrderSummary from './OrderSummary';
import OrderHistory from './OrderHistory';
import Inventory from './Inventory';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



const VendorDashboard = () => {
  const navigate=useNavigate();
  const [showProductForm, setShowProductForm] = useState(false);
  const [showProductPage, setShowProductPage] = useState(false);
  const [showFAQSection, setShowFAQSection] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);
  //logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => setShowFAQSection(false)}>{loginUser && loginUser.name} Dashboard</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          <Menu.Item key="3" onClick={() => {setShowFAQSection(true); setShowProductPage(false);setShowProductForm(false); setShowOrderSummary(false);setShowOrderHistory(false)}}>FAQ</Menu.Item>
          <Menu.Item key="4">
      <Button
        startIcon={<ExitToAppIcon />}
        onClick={(handleLogout)}
      >
        Logout
      </Button>
    </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Products">
            <Menu.Item key="1" onClick={() => {setShowProductForm(true); setShowProductPage(false); setShowFAQSection(false); setShowOrderSummary(false);setShowOrderHistory(false)}}>Add New Product
            </Menu.Item>
              <Menu.Item key="2" onClick={() => {setShowProductForm(false); setShowProductPage(true); setShowOrderSummary(false);setShowOrderHistory(false)}}>Manage Products
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Orders">
              <Menu.Item key="3" onClick={() => {setShowProductForm(false); setShowProductPage(false); setShowFAQSection(false); setShowOrderSummary(true);setShowOrderHistory(false)}}>Order Summary</Menu.Item>
              <Menu.Item key="4" onClick={() => {setShowProductForm(false); setShowProductPage(false); setShowFAQSection(false); setShowOrderSummary(false);setShowOrderHistory(true)}}>Order History</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Analytics">
              <Menu.Item key="5">Sales Analytics</Menu.Item>
              <Menu.Item key="6"onClick={() => {setShowProductForm(false); setShowProductPage(false); setShowFAQSection(false); setShowOrderSummary(false);setShowOrderHistory(false); setShowInventory(true)}}>Inventory Analytics</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
         
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
            }}
          >
            {/* Conditionally render the components */}
            {showFAQSection && <FAQSection />}
            {showProductForm && <ProductForm />}
            {showProductPage && <ProductsPage />}
            {showOrderSummary && <OrderSummary />}
            {showOrderHistory && <OrderHistory />}
            {showInventory && <Inventory />}
           
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </>
  );
};

export default VendorDashboard;
