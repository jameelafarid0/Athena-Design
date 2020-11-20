import React from 'react';
import Header from '../Header';
import Navbar from '../NavBar/NavBar';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import StayRunning from '../StayRunning/StayRunning';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;