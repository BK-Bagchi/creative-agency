import React from 'react'
import './Feedback.css'
import Customer1 from '../../Resources/images/customer-1.png'
import Customer2 from '../../Resources/images/customer-2.png'
import Customer3 from '../../Resources/images/customer-3.png'

const Feedback = () => {
    return (
        <section className="feedback my-5">
            <h2 className="text-center mb-5">Clients <span className="span-color">Feedback</span></h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 customer">
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <img className="customer-img" src={Customer1} alt="Customer" />
                            </div>
                            <div className="col-8">
                                <h5 className="font-weight-bold">Nash Patrik</h5>
                                <p>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="my-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.</p>
                    </div>
                    <div className="col-md-4 customer">
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <img className="customer-img" src={Customer2} alt="Customer" />
                            </div>
                            <div className="col-8">
                                <h5 className="font-weight-bold">Miriam Barron</h5>
                                <p>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="my-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.</p>
                    </div>
                    <div className="col-md-4 customer">
                        <div className="row d-flex align-items-center">
                            <div className="col-4">
                                <img className="customer-img" src={Customer3} alt="Customer" />
                            </div>
                            <div className="col-8">
                                <h5 className="font-weight-bold">Bria Malone</h5>
                                <p>CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="my-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;