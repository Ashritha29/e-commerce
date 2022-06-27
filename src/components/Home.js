import React from 'react';
import Products from './Products';
import Footer from './footer';

function Home() {
    return (
        <div class="container ">
            <div className="hero">
                <div className="card bg-dark text-white">
                    <img src="/images/bg.jpg" className="card-img " alt="Background" height="500px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container text-center">
                            <h5 className="card-title display-3 fw-bolder mb-0">New Season with New Excitments</h5>
                            <p className="card-text lead fs-2 mb-0">Shop from your Heart</p>
                            <p className="card-text lead fs-2 ">Pick your wish at low prize</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;