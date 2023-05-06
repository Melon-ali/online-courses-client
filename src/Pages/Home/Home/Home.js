import React from 'react';
import Banner from '../../Banner/Banner';
import Employees from '../../Employees/Employees/Employees';
import Carousels from '../../Carousels/Carousels';
import Courses from '../../Courses/Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Employees></Employees>
            <Carousels></Carousels>
            <Courses></Courses>
        </div>
    );
};

export default Home;