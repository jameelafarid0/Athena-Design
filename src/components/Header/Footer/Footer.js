import React from 'react';
import logo from './../../../Illustration/Group 86.png'
import fb from '../../../Illustration/facebook-logo-in-circular-shape@2x.png'
import twitter from './../../../Illustration/twitter (4)@2x.png'
import linkedin from './../../../Illustration/linkedin (2)@2x.png'
import dibble from '../../../Illustration/dribbble (1)@2x.png'


const Footer = () => {
    return (
        <div className="background pb-5 pt-5">
            <footer className="font-small Login ">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="col">
                                <div className="d-flex justify-content-center" >
                                    <img width="130px" src={logo} alt="" />
                                </div>
                                {/* <div className="row">
                                    <div className="col">
                                        <img width="20px" src={fb} alt="" />
                                    </div>
                                    <div className="col">
                                        <img width="20px" src={fb} alt="" />
                                    </div>
                                    <div className="col"> 
                                        <img width="20px" src={fb} alt="" />
                                    </div >
                                    <div className="col">
                                        <img width="20px" src={fb} alt="" />
                                    </div>
                                    <div className="col">
                                        <img width="20px" src={fb} alt="" />
                                    </div>
                                </div> */}
                                <div className=" d-flex justify-content-around">
                                    <div className="">
                                        <img width="20px" src={fb} alt="" />
                                    </div>
                                    <div className="">
                                        <img width="20px" src={twitter} alt="" />
                                    </div>
                                    <div className=""> 
                                        <img width="20px" src={linkedin} alt="" />
                                    </div >
                                    <div className="">
                                        <img width="20px" src={dibble} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mx-auto">


                            <ul className="list-unstyled">

                                <li>
                                    <a href="#" className="text-dark">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Enterprise</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mx-auto">

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-dark">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Help Center</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Status</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 mx-auto">

                            <ul className="list-unstyled">

                                <li>
                                    <a href="#" className="text-dark">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Web Design</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Login</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;