import React from 'react';
import './Programs.css';
import { Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Programs = () => {
    return (
        <div className='programs pt-5 pb-5'>
            <div className='container'>
                <Row className='pt-5 pb-5 mt-5 mb-5 align-items-center'>
                    <Col lg={3}>
                        <div className='p-2'>
                           <h1 className='fw-bold text-white'>Scholarship <br /> Programs</h1> 
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='p-2 paragraph fs-5 fw-bold text-white'>
                            <p>Apply for Admission in Post Graduate Diploma. Application Deadline: 26th September 2023 · Undergraduate & Graduate Admission: Fall 2023 Semester · 20% Waiver on ...</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className=''>
                            <button className='pro ms-4 fw-bold rounded'>Histudy Financial Aid<FaArrowRight></FaArrowRight></button> 
                        </div>
                    </Col>
                    
                </Row>
            </div>
        </div>
    );
};

export default Programs;