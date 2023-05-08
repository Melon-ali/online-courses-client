import React from 'react';
import './Subscribe.css';
import { Col, Form, Row } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div className='subscribe pt-1'>
            <div className="container pt-5 pb-5 mt-5 mb-5">
                <Row>
                    <Col lg={6}>
                        <h2><span className='fw-bold'>Subscribe</span></h2>
                        <p className='fs-1'>Our Newsletter</p>
                    </Col>
                    <Col lg={6}>
                        <div className='form-subscribe p-2'>
                            <Form>
                            <Form.Group className="d-flex" controlId="formBasicEmail">
                                <Form.Control type="email"
                                className='fm-input' placeholder="Enter Your E-Email" /><button className='btn-subscribe rounded fw-bold'>Subscribe</button>
                            </Form.Group>
                            
                        </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Subscribe;