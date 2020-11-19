import React from 'react';
import happy from "../../../images/happy@2x.png";
import tropy from "../../../images/marketing@2x.png";
import crazy from "../../../images/surface1@2x.png";
import project from "../../../images/transportation@2x.png";
import "./Achievements.css";
const Achievements = () => {
    return (
        <div className="achievements mb-5">

           <div className="container-sm container-md">

                <div className="row">

                    <div className = "mt-5 col-md-5 col-12 d-flex align-items-center">
                       <div>
                            <h1>Our Achievements</h1>
                            <p className="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.the point of using lorem ipsum that it has more-or-less normal distribution of letter </p>
                       </div>
                    </div>

                    <div className="col-md-7">

                        <div className="row mt-5">

                            <div className="col-md-6 col-12 mt-4">
                               <div className="box-1 d-flex align-items-center justify-content-center">
                                    <img style={{width:"50px",height:"50px"}} src={happy} alt=""/>
                                    <div className="ml-5">
                                        <h1 className="">700+</h1>
                                        <h6>Happy Clients</h6>
                                    </div>
                               </div>
                            </div>

                            <div className="col-md-6 col-12 mt-4">
                                <div className="box-2 d-flex align-items-center justify-content-center">
                                    <img style={{width:"50px",height:"50px"}}  src={tropy} alt=""/>
                                    <div className="ml-5">
                                        <h1 className="">140+</h1>
                                        <h6>Project Completed</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12 mt-4 ">
                                <div className="box-2 d-flex align-items-center justify-content-center">
                                    <img  style={{width:"50px",height:"50px"}} src={crazy} alt=""/>
                                    <div className="ml-5">
                                        <h1 className="">25+</h1>
                                        <h6>Crazy Minds</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-12 mt-4">
                                <div className="box-1 d-flex align-items-center justify-content-center">
                                    <img style={{width:"50px",height:"50px"}}   src={project} alt=""/>
                                    <div className="ml-5">
                                        <h1 className="">75+</h1>
                                        <h6>Running Projects</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;