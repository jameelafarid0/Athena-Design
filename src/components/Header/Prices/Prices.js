import React from 'react';
import './Prices.css'

const Prices = () => {

    
    return (
        <div className="background">
        <div className="responsive pt-5 text-center container">
            <div class="card-deck ">
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">$199</h5>
                        <p class="card-text text-muted">For Basic</p>
                        <hr />
                        <p class="card-text text-dark">Homepage</p>
                        <p class="card-text text-dark">Asset file</p>
                        <p class="card-text text-dark">Source file</p>
                        <p class="card-text text-dark">Free Stock Photos </p>
                        <p class="card-text text-dark">10 Days Free Support</p>
                        <p class="card-text text-dark">24/7 Support</p>
                        <button class=" btn buttonThree hidden">Order now</button>
                    </div>
                </div>
                
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">$399</h5>
                        <p class="card-text text-muted">For Preferred</p>
                        <hr />
                        <p class="card-text text-dark">Homepage</p>
                        <p class="card-text text-dark">4 Inner Pages</p>
                        <p class="card-text text-dark">Asset file</p>
                        <p class="card-text text-dark">Source file</p>
                        <p class="card-text text-dark">Free Stock Photos </p>
                        <p class="card-text text-dark">20 Days Free Support</p>
                        <p class="card-text text-dark">24/7 Support</p>
                        <button class=" btn buttonThree hidden">Order now</button>
                    </div>
                </div>
               
                
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">$599</h5>
                        <p class="card-text text-muted">For Elite</p>
                        <hr />
                        <p class="card-text text-dark">Homepage</p>
                        <p class="card-text text-dark">Asset file</p>
                        <p class="card-text text-dark">Source file</p>
                        <p class="card-text text-dark">Free Stock Photos </p>
                        <p class="card-text text-dark">30 Days Free Support</p>
                        <p class="card-text text-dark">24/7 Support</p>
                        <button class="btn buttonThree hidden">Order now</button>
                    </div>
                </div>
                
            </div>

        </div>
        </div>

    );
};

export default Prices;