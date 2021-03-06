import React from 'react';
import CustomPackage from './CustomPackage/CustomPackage';

import HappyClients from './HappyClients/HappyClients';
import Banner from './Header/Banner';
import Packages from './Packages/Packages';

const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <Packages></Packages>
            <HappyClients></HappyClients>
            <CustomPackage></CustomPackage>
        </div>
    );
};

export default Home;