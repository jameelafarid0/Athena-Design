import React, { useState } from 'react';
import DoInfo from '../../../fakeData/DoInfo';
import DoDetails from '../DoDetails/DoDetails';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const [options, setOptions] = useState(DoInfo);
    return (
        <div>
            <div className="background">
                
               <h2 className="text-center pt-5">What we do</h2>
                <div style={{textAlign:"center", marginTop:"10px"}}>
                    <p className="p">our main focus is to make the user experience very <br/> simple and easy simplicity is our strength</p>
                </div>


                <div className="d-flex" style={{marginLeft:"72px"}}>
                    <div className="  row   pt-3">
                        {
                            options.map(option => <DoDetails
                                option={option}
                                key={option.key}
                            ></DoDetails>)
                        }
                    </div>
                </div>



            </div>
        </div>
    );
};

export default WhatWeDo;