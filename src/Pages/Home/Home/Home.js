import React from 'react';
import Banner from '../../Banner/Banner';
import Employees from '../../Employees/Employees/Employees';
import Carousels from '../../Carousels/Carousels';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Employees></Employees>
            <Carousels></Carousels>
        </div>
    );
};

export default Home;