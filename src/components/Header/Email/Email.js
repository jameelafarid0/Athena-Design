import React from 'react';
import './Email.css'

const Email = () => {
    return (
        <div className="background">
            <div className="col text-center pt-5">
                <div className="mt-5 pt-5 pb-3 h2-design" >
                    <h3>Get your design right, right now</h3>
                </div>
                <div>
                    <p className="text-muted pb-5">Be the first know our latest offers and updates!</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="wrap">
                        <div className="search">
                            <input type="text"  className="searchTerm" placeholder="Enter your email address" />
                            <button type="submit" className="searchButton">
                                Get Started
                                </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Email;