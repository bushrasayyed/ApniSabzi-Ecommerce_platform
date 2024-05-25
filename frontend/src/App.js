import React from 'react';
import './App.css';
import Homepage from './Components/User/Homepage';
import Layout from './Components/User/Layout';
import Contact from './Components/User/Contact';
import LogIn from './Components/User/LogIn';
import AdminPage from './Components/Admin/AdminPage'
import Customers from './Components/Admin/Pages/Customers';
import Inventory from "./Components/Admin/Pages/Inventory";
import Vendors from "./Components/Admin/Pages/Vendors";
import ViewProduct from "./Components/Admin/ViewProducts"
import ResetPassword from './Components/User/ResetPassword';
import ProductList from './Components/User/screens/ProductList';
// import ProductScreen from './Components/User/screens/ProductScreen';
import{
    BrowserRouter,
   Routes,
   Route,
   Navigate
    
  } from "react-router-dom";
import Register from './Components/User/Register';
import { SnackbarProvider} from 'notistack';
import CartScreen from './Components/User/screens/CartScreen';
import ShippingAddressScreen from './Components/User/screens/ShippingAddressScreen';
import PaymentMethodScreen from './Components/User/screens/PaymentMethodScreen';
import PlaceOrderScreen from './Components/User/screens/PlaceOrderScreen';
import OrderScreen from './Components/User/screens/OrderScreen';
import VendorDashboard from './Components/Vendor/VendorDashboard';


function App() {
 
  return (
   
    <>
     
       <BrowserRouter>
       
       {/* <React.Fragment> */}
      <Routes>
        <Route path="/" element={<Layout><Homepage /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
       <Route path="/signup" element={<Layout><SnackbarProvider maxSnack={3}>
       <Register />
       </SnackbarProvider></Layout>} />
      
        <Route path="/login" element={<Layout><LogIn /></Layout>} />
        <Route path="/login/main" element={<Layout><ProductList/></Layout>} />
        {/* <Route path="/product/:id" element={<Layout><ProductScreen /></Layout>} /> */}
        <Route path="/cart" element={<Layout><CartScreen /></Layout>} />
         < Route path="/shipping" element={<Layout><ShippingAddressScreen /></Layout>} />
         <Route path="/payment" element={<Layout><PaymentMethodScreen /></Layout>} />
         <Route path="/placeorder" element={<Layout><PlaceOrderScreen /></Layout>} />
         <Route path="/order/:id" element={<Layout><OrderScreen /></Layout>} />
        <Route path="/forgotpassword" element={<Layout><ResetPassword /></Layout>} />
        {/* <Route path="/cart" element={<Layout><Cart /></Layout>} /> */}
        {/* <Route path="/checkout" element={<Layout><Checkout /></Layout>} /> */}
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/adminproductpage" element={<ViewProduct />} />
        <Route path="/admin/inventory" element={<Inventory />}></Route>
          <Route path="/admin/orders" element={<Vendors />}></Route>
          <Route path="/admin/customers" element={<Customers />}></Route>



          <Route path="/vendordashboard" element={<VendorDashboard/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
