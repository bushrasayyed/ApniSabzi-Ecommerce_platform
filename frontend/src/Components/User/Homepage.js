import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img/F-V.jpg'
import img2 from '../img/delivery.jpg'
import img3 from '../img/Fruitsss.jpg'
import img4 from '../img/Vegetabless.jpg'


export default function Homepage() {
  return (
    <>
    <div>
       <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">Fresh produce delivery</h4>
                        <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits </h1>
                        
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={img1} className="img-fluid w-100 h-100 bg-secondary rounded" alt=""/>
                                    <Link to="" className="btn px-4 py-2 text-white rounded">Fruits & Veggies</Link>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid featurs py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Free Shipping</h5>
                                <p className="mb-0">Free on order over 500₹</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-user-shield fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Security Payment</h5>
                                <p className="mb-0">100% security payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-exchange-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Fast Delivery</h5>
                                <p className="mb-0">Delivery within 2-3 hours </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>24/7 Support</h5>
                                <p className="mb-0">Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
       
        <div id="Features" className="container-fluid service py-5">
            <div className="container py-5">
                <div className="row g-5 justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <Link to="/">
                            <div className="service-item bg-secondary rounded border border-secondary">
                                <img src={img2} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-primary text-center p-4 rounded">
                                        <h5 className="text-white">Fast Service</h5>
                                        <h3 className="mb-0">"Fast Delivery within 2 hours"</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link to="/">
                            <div className="service-item bg-dark rounded border border-dark">
                                <img src={img3} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-light text-center p-4 rounded">
                                        <h5 className="text-primary">Tasty Fruits</h5>
                                        <h3 className="mb-0">"Affordable Fruit Delights." </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link to="/">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src={img4} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Exotic Vegetables</h5>
                                        <h3 className="mb-0">Discount upto 20 %</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
       

        <Link to="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

    </div>
    </>
  )
}

