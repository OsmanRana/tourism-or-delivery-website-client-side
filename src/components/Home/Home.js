import React from 'react';
import HappyClients from './HappyClients/HappyClients';
import Banner from './Header/Banner';
import Packages from './Packages/Packages';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <HappyClients></HappyClients>
            
        </div>
    );
};

export default Home;