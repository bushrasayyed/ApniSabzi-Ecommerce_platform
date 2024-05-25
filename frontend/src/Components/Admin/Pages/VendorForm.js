// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import {  useSnackbar } from 'notistack';


// const VendorForm = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const { enqueueSnackbar } = useSnackbar();

//   const [credentials, setCredentials] = useState({
//       name: '',
//       email: '',
//       password: '',
//     });
//   // const onFinish = async (values) => { 
//   //   setLoading(true);
//   //   try {
      
//   //     if (credentials.password.length < 5) {
//   //       setMessage("Password must be at least 5 characters long");
//   //       enqueueSnackbar("Password must be at least 5 characters long", { variant: 'error' });
//   //     }  
//   //     else {
//   //       const response = await fetch('http://localhost:5000/addvendor', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({
//   //           name: credentials.name,
//   //           email: credentials.email,
//   //           password: credentials.password,
//   //           userType: 'vendor',
//   //         }),
//   //       });
//   //       const json = await response.json();
//   //       if (response.ok) {
//   //         setMessage("Vendor Added Successfully");
//   //         enqueueSnackbar("Vendor Added Successfully!!!!!", { variant: 'success' });
//   //         setCredentials({
//   //           name: '',
//   //           email: '',
//   //           password: '',
//   //         });
//   //       } else {
//   //         setMessage(json.error || "Something went wrong. Please try again.");
//   //         enqueueSnackbar(json.error || "Something went wrong. Please try again.", { variant: 'error' });
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error('Error parsing JSON:', error);
//   //     setMessage("Something went wrong. Please try again.");
//   //     enqueueSnackbar("Something went wrong. Please try again.", { variant: 'error' });
//   //   }
//   // };

//   const onFinish = (values) =>{
//     console.log(values)
//   }

//   // const onFinishFailed = (errorInfo) => {
//   //   console.log('Failed:', errorInfo);
//   // };
//   // const onChange = (e) => {
//   //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   // };

//   return (
//     <Form
//       // form={form}
//       // name="vendor_form"
//       onFinish={onFinish}
//       // onFinishFailed={onFinishFailed}
//       layout="vertical"
//     >
//        <Form.Item
//         label="Vendor Name"
//         name="name"
//         rules={[{ required: true, message: 'Please enter the vendor name!' }]}
//         // onChange={onChange}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Vendor Email"
//         name="email"
//         rules={[{ required: true, message: 'Please enter the vendor email!' }]}
//         // onChange={onChange}
//       >
//         <Input type='email'/>
//       </Form.Item>

//       <Form.Item
//         label="Vendor Password"
//         name="password"
//         rules={[{ required: true, message: 'Please enter the vendor password!' }]}
//         // onChange={onChange}
//       >
//         <Input type='password' />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary">
//           Add Vendor
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default VendorForm;


import { Form, Input, message, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const VendorForm = () => {
  const submitHandler = async(values) =>{
    console.log(values)
    try {
      const response = await fetch('http://localhost:5000/addvendor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
    if (response.ok) {
      const data = await response.json();
      message.success("Vendor added successfully");
      console.log(data);
    }
      else{
      console.log("fail")
    }
    } catch (error) {
      console.log(error)
      message.error("something went wrong")      
    }
  }
  return (
    <>
    <div className="register-page">
        
        <Form layout="vertical" onFinish={submitHandler}>
          
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="userType" name="userType">
           <Select>
            <Option value='vendor'>Vendor</Option>
           </Select>
          </Form.Item>
          <Form.Item label="Shop Name" name="shopName">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input  />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Add Vendor</button>
          </div>
        </Form>
      </div>
      
    </>
  )
}

export default VendorForm
