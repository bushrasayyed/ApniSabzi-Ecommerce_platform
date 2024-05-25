import React,{useEffect,useState} from 'react';
import { Badge, Drawer, List, Space, Typography, Button } from "antd";
import {useNavigate } from 'react-router-dom';
import { BellFilled, MailOutlined, LogoutOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
import VendorForm from './Pages/VendorForm'
  
const AdminHeader = () => {
  const navigate=useNavigate()
   //set user name on nav bar
   const [loginUser, setLoginUser] = useState("");
   const [showVendorForm, setShowVendorForm] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [comments, setComments] = useState([]); // State to store comments data
  const [notifications, setNotifications] = useState([]);
  
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
  // State for managing drawer visibility
  // const [commentsOpen, setCommentsOpen] = React.useState(false);
  // const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  return (
    <div className="AppHeader">
   
    <Typography.Title>{loginUser && loginUser.name} Dashboard</Typography.Title>
     
    <Space>
        <Badge dot>
        <MailOutlined style={{ fontSize: 24 }} onClick={() => setCommentsOpen(true)} />
        </Badge>
        <Badge>
        <BellFilled style={{ fontSize: 24 }} onClick={() => setNotificationsOpen(true)} />
        </Badge>
       
        <Button type="primary" onClick={() => setShowVendorForm(true)}>Add Vendor</Button>
        
        <Link to="/adminproductpage">Products</Link>
        <Drawer
        title="Add Vendor"
        placement="right"
        closable={true}
        onClose={() => setShowVendorForm(false)}
        visible={showVendorForm}
      >
        <VendorForm />
      </Drawer>
        <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </Space>
      <Drawer
        title="Comments"
        onClose={() => setCommentsOpen(false)}
        visible={commentsOpen}
        maskClosable
        width={400}
      >
       <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
    </Drawer>
    <Drawer
        title="Notifications"
        onClose={() => setNotificationsOpen(false)}
        visible={notificationsOpen}
        maskClosable
        width={400}
      >
        <List
          dataSource={notifications}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
  </div>
  )
}

export default AdminHeader
