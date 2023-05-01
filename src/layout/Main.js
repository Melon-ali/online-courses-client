import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;