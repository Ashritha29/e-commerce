import React from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';
import SignUp from './SignUp';

function Navbar() {
    return (
        <div>

            {/* links to routes */}
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 " to="#">Easy Shop</NavLink>
                    <div className='dropdown'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle docs navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="contact us">Contact us</NavLink>
                                </li>
                            </ul>
                            <div className="buttons">
                                {/* Login button */}
                                <NavLink to="/signup" className="btn btn-outline-dark ">
                                    <i className="me-1"></i>Register</NavLink>
                                {/* Register button */}
                                <NavLink to="/login" className="btn btn-outline-dark ms-2 navlink active">
                                    <i className="me-1"></i>Login</NavLink>
                                {/* Cart button */}
                                <NavLink to="/cart " className="btn btn-outline-dark ms-2 navlink active">
                                    <i className="me-1"></i>Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* define the routes for its children */}
            <Routes>
                {/* route for home component */}
                <Route path="/" element={<Home />} />
                {/* users component */}
                <Route path="/products" element={<Products />} />
                {/* contactus component */}
                <Route path="/contactus" element={<ContactUs />} />
                {/* Signup component */}
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}


export default Navbar;