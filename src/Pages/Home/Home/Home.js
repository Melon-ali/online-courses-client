import React from 'react';
import Banner from '../../Banner/Banner';
import Employees from '../../Employees/Employees/Employees';
import Carousels from '../../Carousels/Carousels';
import Courses from '../../Courses/Courses/Courses';
import Services from '../../Services/Services/Services';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Employees></Employees>
            <Carousels></Carousels>
            <Courses></Courses>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;