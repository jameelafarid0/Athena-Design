import React from 'react';
import image from "../../../images/20 [Converted]@2x.png";
import "./StayRunning.css";


const StayRunning = () => {
    return (
        <div className="running container-md container-sm">
            <div className="row">
                <div className="col-md-6 col-12 pt-3">
                    <img  style={{width:"100%",height:"100%"}} src={image} alt=""/>
                </div>
                <div className="d-flex col-12 col-md-6 align-items-center">
                    <div>
                        <h1>Stay Running & Project</h1>
                        <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae commodi vero libero atque! Ea, nam perferendis culpa, odio ut dolore voluptatem expedita quis, aspernatur explicabo officia facilis incidunt nesciunt ex.</p>
                        <button className="btn common-btn mt-3">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayRunning;