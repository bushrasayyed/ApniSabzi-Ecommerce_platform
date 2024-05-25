import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" >
                                <h1 className="text-primary">Get in touch</h1>
                                <p className="mb-4">Need assistance? Have a suggestion? We value your feedback and want to hear from you! Use the contact form below, send us an email, or give us a call. We're committed to providing a prompt and helpful response.
                                    We're dedicated to connecting with our community and providing an 
                                    exceptional experience. Whether you're a potential customer,
                                     a current client, or simply curious about our work, we encourage you
                                      to reach out. You can contact us by phone, email, social media, 
                                      or by filling out the form below. We're available during business 
                                      hours and will respond to your inquiry within 24 hours.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                               <img src="img/baner-1.png" alt=""/>
                            </div>
                        </div>
                        
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">Azam Campus , Pune</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">sayyedbushra2001@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+020) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

