import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
       <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Fresh Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item">
                                    <Link className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                        <span className="text-dark">All Products</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" to="#tab-2">
                                        <span className="text-dark" >Fruits</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" to="#tab-3">
                                        <span className="text-dark" >Vegetables</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" to="#tab-4">
                                        <span className="text-dark" >Instant Breakfast</span>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Grapes-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p> "Join the Angoor Shah parade! Bursting with sweetness, these grapes are a royal escapade!".</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">60 ₹/ kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Apple-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apples</h4>
                                                    <p>"Seb Sultan reigns supreme! Crunch into royalty with our apples, fit for a king's dream!" </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">100 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Mangoes-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Mangoes</h4>
                                                    <p>"Aam Aadmi calling all mango lovers! Indulge in the juicy ecstasy, where every bite feels like summer discovery!"  </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 200 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Papaya-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Papaya</h4>
                                                    <p>"Papaya Maharaj at your service! Taste the tropical richness, a blissful journey for every palate!" </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">50 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Tomato.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Tomatoes</h4>
                                                    <p>"Get your tangy Tamatar delight, the secret ingredient for every kitchen's spice and bite!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">30 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Onions.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Onions</h4>
                                                    <p>"Pyaaz Raja in the house! Spice up your life with the tears of joy from the Onion Kingdom!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">80 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Aloo.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Potatoes</h4>
                                                    <p>Aloo Wale Bhaiya bringing the magic spuds! Elevate your meals with the versatile Aloo dance."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">40 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Lemons-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Lemons</h4>
                                                    <p>"Nimbu Nation stand up! Zest up your day with our citrus sensation, the ultimate flavor revelation!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">20 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Apple-unsplash.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apples</h4>
                                                    <p>"Crunch into the Seb Sultan's treasure trove – our apples, a royal rendezvous of crispiness and sweetness, fit for a flavor kingdom!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">100 ₹  / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Strawberry.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Strawberries</h4>
                                                    <p> "Berry Bliss alert! Step into the world of Strawberry Serenade, where each bite is a symphony of sweetness, making every moment berry-licious!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">200 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Mangoes-unsplash.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Mangoes</h4>
                                                    <p> "Aam Aadmi calling all mango lovers! Indulge in the juicy ecstasy, where every bite feels like summer discovery!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">230 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Grapes-unsplash.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>"Join the Angoor Shah parade! Bursting with sweetness, these grapes are a royal escapade!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">100 ₹ / kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Tomato.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Tomato</h4>
                                                    <p>"Get your tangy Tamatar delight, the secret ingredient for every kitchen's spice and bite!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">30 ₹/ kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Aloo.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Potatoes</h4>
                                                    <p>"Aloo Wale Bhaiya bringing the magic spuds! Elevate your meals with the versatile Aloo dance."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">50 ₹/ kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Onions.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Onions</h4>
                                                    <p>"Pyaaz Raja in the house! Spice up your life with the tears of joy from the Onion Kingdom!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">60 ₹/ kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Lemons-unsplash.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute">Veggies</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Lemons</h4>
                                                    <p>"Nimbu Nation stand up! Zest up your day with our citrus sensation, the ultimate flavor revelation!"</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">20 ₹/ kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Milk.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Dairy Fresh</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Milk</h4>
                                                    <p>"Start your day with a splash of goodness! Our milk, the liquid sunshine for a wholesome morning."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">80 ₹ / L</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Bread.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Dairy Fresh </div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Bread</h4>
                                                    <p>"Toast to a great morning with our fresh bread! Your day begins with the perfect slice of warmth and comfort."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">25 ₹ / Packet</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Butter.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Dairy Fresh</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Butter</h4>
                                                    <p>"Butter Bliss awaits! Spread the love on your breakfast table with our creamy delight, making mornings extra indulgent."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">30 ₹ / 100 g </p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Eggs.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Dairy Fresh</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Eggs</h4>
                                                    <p>"Crack into a fantastic morning with our eggs! Packed with protein and endless possibilities, they're the sunny side to your breakfast adventure."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 30 ₹ / Dozen</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Cheese.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Dairy Fresh</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Cheese</h4>
                                                    <p>"Say cheese to a Gouda morning! Elevate your breakfast with our cheesy wonders, a taste that lingers and brightens."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 50 ₹ / 100 g</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Cookies.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Yummy </div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Cookies</h4>
                                                    <p>"Sweeten your mornings with a bite of joy! Our cookies are a symphony of flavors, a perfect harmony for your breakfast delight."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 100 ₹ / 1kg</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Coffee.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Beverage</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Instant Coffee Powder</h4>
                                                    <p>"Awaken your senses with a cup of liquid magic! Our coffee, the morning potion that kickstarts your day with warmth and energy."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 150 ₹ / 200 g</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="img/Jam.webp" className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" >Yummy  </div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Fruit Jam</h4>
                                                    <p>"Spread the sweetness of dawn with our jam! Each jar is a burst of fruity joy, turning your morning toast into a symphony of flavors."</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0"> 150 ₹ / 500 g</p>
                                                        <Link to="/" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </div>
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
                                <img src="img/Breakfast.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-primary text-center p-4 rounded">
                                        <h5 className="text-white">Instant Morning Fuel</h5>
                                        <h3 className="mb-0">"Swift Gourmet Mornings."</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link to="/">
                            <div className="service-item bg-dark rounded border border-dark">
                                <img src="img/Fruitsss.jpg" className="img-fluid rounded-top w-100" alt=""/>
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
                                <img src="img/Vegetabless.jpg" className="img-fluid rounded-top w-100" alt=""/>
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
    </div>
    </>
  )
}

export default Products
