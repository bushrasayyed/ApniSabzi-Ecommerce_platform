import React, { useState, useEffect ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from '../User/screens/Store';
import Badge from 'react-bootstrap/Badge';
export default function Navbar() {
  const navigate = useNavigate();
  //set user name on nav bar
  const [loginUser, setLoginUser] = useState("");
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  

 //logout
 const handleLogout = () => {
   localStorage.removeItem("user");
   dispatch({ type: 'CART_CLEAR' });
   navigate("/login");
 };
  return (
    <div>
      <div className="container-fluid fixed-top">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">ApniSabzi</h1>
            </Link>
           
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link className="nav-item nav-link active" to="/">
                  Home
                </Link>
                <Link to="/" className="nav-item nav-link">
                  Features
                </Link>

                <Link className="nav-item nav-link" to="/contact">
                  Contact
                </Link>
                {localStorage.getItem("user") && (
                  <Link className="nav-item nav-link" to="/login/main">
                    Products
                  </Link>
                )}
                
               
                
              </div>

              <div className="d-flex m-3 me-0">
                
                {!localStorage.getItem("user") ? (
                  <Link to="/login" className="position-relative me-4 my-auto">
                    <i className="fas fa-user fa-2x"></i>
                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"></span>
                  </Link>
                ) : (
                  <>
                  <li className="d-flex nav-item nav-link" >{loginUser && loginUser.name}</li>
                  <Link to="/cart" className="position-relative me-5 my-auto">
                      <i className="fa fa-shopping-bag fa-2x"></i>
                      <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1">
                        {cart.cartItems.length > 0 && (
                          <Badge pill bg="danger">
                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                          </Badge>
                        )}
                      </span>
                    </Link>
                  <Link
                  to="/"
                    className="position-relative me-4 my-auto"
                    onClick={handleLogout}
                  >
                    <i class="bi bi-box-arrow-right fa-2x"></i>
                  </Link>
                  </>
                )}

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
