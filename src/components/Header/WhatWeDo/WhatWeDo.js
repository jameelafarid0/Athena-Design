import React, { useState } from 'react';
import DoInfo from '../../../fakeData/DoInfo';
import DoDetails from '../DoDetails/DoDetails';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const [options, setOptions] = useState(DoInfo);
    return (
        <div>
            <div className="background">
                <div  >
                    <h2 className="pt-5 h2"  >What we do</h2>
                </div>
                <div style={{ textAlign: "center" }}>
                    <p className="p">our main focus is to make the user experience very <br /> simple and easy simplicity is our strength</p>
                </div>
                <div className="d-flex">
                    <div className="row pt-3 mb-5" style={{marginLeft:"113px"}}>
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