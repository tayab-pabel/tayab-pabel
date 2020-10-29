import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact pt-5">
            <Navbar/>
            <div className="container py-5">
                <div className="header text-center">
                    <h2>CONTACT <span>ME</span></h2>
                    <p>I'd really love to hear your feedback</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-5">
                        <div className="card text-center py-4">
                            <div className="card-body">
                                <h4>Address</h4>
                                <p>Dhaka, Bangladesh</p>
                                <h4 className="pt-3">Phone</h4>
                                <p>+8801761483999</p>
                                <h4 className="pt-3">Email</h4>
                                <p>tayabpabel@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 mt-md-0 mt-5">
                        <form action="#" method="POST">
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <textarea class="form-control p-4" rows="4" placeholder="Message"></textarea>
                            </div>
                            <input type="submit" className="btn btn-block py-3" value="SEND"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;