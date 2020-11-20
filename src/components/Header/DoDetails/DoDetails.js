import React from 'react';
import './DoDetails.css';

const DoDetails = ({ option }) => {
    const { name, description, image } = option;
    return (
        <div className="do"> 
            <div className="box12 text-center pt-3  " style={{marginTop:"10px"}} >
                <div className="do" style={{margin:"20px"}}>
                    <img className="img1" width="60px" src={image} alt="" />
                    <h5 className="mt-3 h5" >{name}</h5>
                    <p style={{ padding: "0px 10px 0px 10px" }} className=" mt-3 p2">{description} </p>
                </div>

            </div>
        </div>
    );
};

export default DoDetails;