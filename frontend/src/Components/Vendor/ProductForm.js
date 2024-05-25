// import React, { useState } from "react";
// import { Button, TextField, Typography } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material";

// const ProductForm = () => {
//   const [values, setValues] = useState({
//     productName: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("productName", values.productName);
//       formData.append("description", values.description);
//       formData.append("price", values.price);
//       formData.append("quantity", values.quantity);
//       formData.append("image", values.image);

//       const user = JSON.parse(localStorage.getItem("user"));
//       console.log(user);
//       const authToken = user.authtoken;
//       console.log(authToken);
//       const response = await fetch("http://localhost:5000/addproduct", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "multipart/form-data",
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Product added successfully:", data);
//       } else {
//         const errorData = await response.json();
//         console.error("Error adding product:", errorData);
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//     console.log({ ...values, [name]: value }); // Log the updated values object
//   };

//   const handleImageChange = (e) => {
//     setValues({ ...values, image: e.target.files[0] });
//   };

//   return (
//     <div style={{ width: "500px" }}>
//       <Typography variant="h6">Add Product</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Product Name"
//           name="productName"
//           value={values.productName}
//           onChange={handleChange}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={values.description}
//           onChange={handleChange}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Price"
//           name="price"
//           type="number"
//           value={values.price}
//           onChange={handleChange}
//           required
//           fullWidth
//         />
//         <TextField
//           label="Quantity"
//           name="quantity"
//           type="number"
//           value={values.quantity}
//           onChange={handleChange}
//           required
//           fullWidth
//         />
//         <input
//           type="file"
//           accept=".jpg,.jpeg,.png"
//           onChange={handleImageChange}
//           style={{ display: "none" }}
//           id="imageInput"
//         />
//         <label htmlFor="imageInput">
//           <Button
//             variant="outlined"
//             component="span"
//             startIcon={<CloudUpload />}
//           >
//             Upload Image
//           </Button>
//         </label>
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

// import React from "react";
// import { Form, Input, message } from "antd";

// const ProductForm = () => {
//   //get token from browser
//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = user.authtoken;

//   console.log(token);
//   const submitHandler = async (values) => {
//     console.log(values);
//     try {
//       const response = await fetch("http://localhost:5000/addproduct", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(values),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         message.success("Vendor added successfully");
//         console.log(data);
//       } else {
//         console.log("fail");
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("something went wrong");
//     }
//   };
//   return (
//     <>
//       <div className="">
//         <Form layout="vertical" onFinish={submitHandler}>
//           <h1>Add Product</h1>
//           <Form.Item label="Product Name" name="name">
//             <Input />
//           </Form.Item>
//           <Form.Item label="Description" name="description">
//             <Input type="TextField" />
//           </Form.Item>
//           <Form.Item label="Price" name="price">
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item label="Quantity" name="quantity">
//             <Input type="number" />
//           </Form.Item>
//           <Form.Item label="Image" name="image">
//             <Input type="file" />
//           </Form.Item>
//           <div className="d-flex justify-content-between">
//             <button className="btn btn-primary">Add</button>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default ProductForm;

// import React, { useState } from "react";
// import { Form, Input, Button, message } from "antd"; // Assuming you're using Ant Design components

// const ProductForm = () => {
//   // const [formData, setFormData] = useState({});

//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = user.authtoken;

//   const submitHandler = async (values) => {
//     console.log(token);
//     console.log(values);
//     try {
//       const formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("description", values.description);
//       formData.append("price", values.price);
//       formData.append("quantity", values.quantity);
//       formData.append("image", values.image[0]);

//       const response = await fetch("http://localhost:5000/addproduct", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       console.log(formData);
//       if (response.ok) {
//         const data = await response.json();
//         message.success("Product added successfully");
//         console.log(data);
//       } else {
//         message.error("Failed to add product");
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <Form layout="vertical" onFinish={submitHandler}>
//         <h1>Add Product</h1>
//         <Form.Item
//           label="Product Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter product name" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Description"
//           name="description"
//           rules={[{ required: true, message: "Please enter description" }]}
//         >
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item
//           label="Price"
//           name="price"
//           rules={[{ required: true, message: "Please enter price" }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           label="Quantity"
//           name="quantity"
//           rules={[{ required: true, message: "Please enter quantity" }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item label="Image" name="image">
//           <Input type="file" />
//         </Form.Item>
//         <div className="d-flex justify-content-between">
//           <Button type="primary" htmlType="submit">
//             Add
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ProductForm;

// import React, { useState } from "react";

// const ProductForm = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: "",
//   });

//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = user.authtoken;

//   console.log(token);
//   const { name, description, price, quantity, image } = product;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/addproduct", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         name,
//         description,
//         price,
//         quantity,
//         image,
//       }),
//     });
//     const savedProduct = await response.json();
//     console.log(savedProduct);
//   };

//   const onChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <div className="">
//         <form onSubmit={handleSubmit}>
//           <h1>Add Product</h1>
//           <div>
//             <input
//               type="text"
//               placeholder="Product Name"
//               onChange={onChange}
//               value={product.name}
//               name="name"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Description"
//               onChange={onChange}
//               value={product.description}
//               name="description"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Price"
//               onChange={onChange}
//               value={product.price}
//               name="price"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Quantity"
//               onChange={onChange}
//               value={product.quantity}
//               name="quantity"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="file"
//               placeholder="Image"
//               onChange={onChange}
//               value={product.image}
//               name="image"
//               required
//             />
//           </div>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ProductForm;

import React, { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    rating: "",
    image: null, // Change image to null to properly handle file upload
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.authtoken;
  const userId = user.id;

  // console.log(token);
  // console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(); // Use FormData to handle file uploads
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("quantity", product.quantity);
      formData.append("rating", product.rating);
      formData.append("image", product.image); // Append image file to FormData
      formData.append("user", userId);

      const response = await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send FormData as the request body
      });

      if (response.ok) {
        const savedProduct = await response.json();
        console.log(savedProduct);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const onChange = (e) => {
    // For file input, use e.target.files[0] to get the file object
    const value =
      e.target.name === "image" ? e.target.files[0] : e.target.value;

    setProduct({ ...product, [e.target.name]: value });
  };

  return (
    <div className="form-container">
    <form id="product-form" onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Product Name"
          onChange={onChange}
          value={product.name}
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description"
          onChange={onChange}
          value={product.description}
          name="description"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Price"
          onChange={onChange}
          value={product.price}
          name="price"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Quantity"
          onChange={onChange}
          value={product.quantity}
          name="quantity"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Rating"
          onChange={onChange}
          value={product.rating}
          name="rating"
          required
        />
      </div>
      <div className="form-group">
        <input type="file" onChange={onChange} name="image" required />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
  
  );
};

export default ProductForm;

// import React, { useState } from "react";

// const ProductForm = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: null,
//   });

//   const [imagePreview, setImagePreview] = useState(null); // For image preview
//   const [error, setError] = useState(null); // For error handling

//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = user.authtoken;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("name", product.name);
//       formData.append("description", product.description);
//       formData.append("price", product.price);
//       formData.append("quantity", product.quantity);
//       // formData.append("image", product.image);

//       const response = await fetch("http://localhost:5000/addproduct", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         const savedProduct = await response.json();
//         console.log(savedProduct);
//         // Clear form fields and image preview after successful submission
//         setProduct({
//           name: "",
//           description: "",
//           price: "",
//           quantity: "",
//           image: null,
//         });
//         setImagePreview(null);
//       } else {
//         setError("Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       setError("Error adding product. Please try again.");
//     }
//   };

//   const onChange = (e) => {
//     if (e.target.name === "image") {
//       setProduct({ ...product, image: e.target.files[0] });
//       // Preview image
//       setImagePreview(URL.createObjectURL(e.target.files[0]));
//     } else {
//       setProduct({ ...product, [e.target.name]: e.target.value });
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Add Product</h1>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//         <div>
//           <input
//             type="text"
//             placeholder="Product Name"
//             onChange={onChange}
//             value={product.name}
//             name="name"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Description"
//             onChange={onChange}
//             value={product.description}
//             name="description"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             placeholder="Price"
//             onChange={onChange}
//             value={product.price}
//             name="price"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             placeholder="Quantity"
//             onChange={onChange}
//             value={product.quantity}
//             name="quantity"
//             required
//           />
//         </div>
//         {/* <div>
//           <input type="file" onChange={onChange} name="image" required />
//           {imagePreview && (
//             <img
//               src={imagePreview}
//               alt="Preview"
//               style={{ maxWidth: "200px" }}
//             />
//           )}
//         </div> */}
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

// import React, { useState } from "react";

// const ProductForm = () => {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });
//   const { name, email, password, cpassword } = credentials;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <div className="">
//         <form
//           onSubmit={handleSubmit}
//           className="login__create none"
//           id="login-up"
//         >
//           <h1 className="login__title">Add Product</h1>
//           <div className="login__box">
//             <i className="bx bx-user login__icon" />
//             <input
//               type="text"
//               placeholder="Name"
//               className="login__input"
//               onChange={onChange}
//               value={credentials.name}
//               name="name"
//             />
//           </div>
//           <div className="login__box">
//             <i className="bx bx-at login__icon" />
//             <input
//               type="text"
//               placeholder="Email"
//               className="login__input"
//               onChange={onChange}
//               value={credentials.email}
//               name="email"
//               required
//             />
//           </div>
//           <div className="login__box">
//             <i className="bx bx-lock-alt login__icon" />
//             <input
//               type="text"
//               placeholder="Password"
//               className="login__input"
//               onChange={onChange}
//               value={credentials.password}
//               name="password"
//               required
//             />
//           </div>
//           <div className="login__box">
//             <i className="bx bx-lock-alt login__icon" />
//             <input
//               type="text"
//               placeholder="Confirm Password"
//               className="login__input"
//               onChange={onChange}
//               value={credentials.cpassword}
//               name="cpassword"
//               required
//             />
//           </div>
//           <button type="submit" className="login__button">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ProductForm;

// import React from "react";
// import { Form, Input, Button, message } from "antd";

// const ProductForm = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const token = user.authtoken;

//   const submitHandler = async (values) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("description", values.description);
//       formData.append("price", values.price);
//       formData.append("quantity", values.quantity);
//       formData.append("image", values.image[0]);

//       const response = await fetch("http://localhost:5000/addproduct", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         message.success("Product added successfully");
//         console.log(data);
//       } else {
//         message.error("Failed to add product");
//       }
//     } catch (error) {
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <Form layout="vertical" onFinish={submitHandler}>
//         <h1>Add Product</h1>
//         <Form.Item
//           label="Product Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter product name" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Description"
//           name="description"
//           rules={[{ required: true, message: "Please enter description" }]}
//         >
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item
//           label="Price"
//           name="price"
//           rules={[{ required: true, message: "Please enter price" }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           label="Quantity"
//           name="quantity"
//           rules={[{ required: true, message: "Please enter quantity" }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           label="Image"
//           name="image"
//           rules={[{ required: true, message: "Please upload an image" }]}
//         >
//           <Input type="file" />
//         </Form.Item>
//         <div className="d-flex justify-content-between">
//           <Button type="primary" htmlType="submit">
//             Add
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ProductForm;
