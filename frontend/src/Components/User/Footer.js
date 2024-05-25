import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white-50 pt-4 mt-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <Link to="/">
                <h1 className="text-primary mb-3">ApniSabzi</h1>
                <p className="text-secondary mb-0">
                  Fresh products at your doorstep
                </p>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why Choose Us!</h4>
                <p className="mb-0">
                  ApniSabzi aspires to be an integral part of the local fabric,
                  contributing to growth, sustainability, and vibrancy of the
                  Pune community.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
              <h4 className="text-light mb-3">Payment Accepted</h4>
              <p>Cash </p>
              </div>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-end">
              <div className="footer-item">
                <h4 className="text-light mb-3">Connect With Us</h4>
                <div className="d-flex">
                  <Link
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    to="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <a
                    href="mailto:your@email.com"
                    className="btn btn-outline-secondary btn-md-square rounded-circle"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright bg-dark py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <Link to="/">
                  <i className="fas fa-copyright text-light me-2"></i>ApniSabzi
                </Link>
                , All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </Link>
    </footer>
  );
}
