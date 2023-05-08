import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import './Contact.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='pt-5 pb-5 mt-5 mb-5'>
            <div className='container'>
                <Row className='pt-5 pb-5'>
                    
                    <Col lg={6}>
                        <div className='pt-5 mt-5'>
                            <h3 className='online pt-2 pb-2 fw-bold'>Want to stay informed about new courses & histudy?</h3>
                            <p className='p-text pt-4 pb-3'>Histudy educational platform ipsum dolor sit amet consectetur adipisicing elit. Nam inventore praesentium alias incidunt! Veritatis.</p>
                            <div>
                                <h3 className='pb-3'>You can also follow us on:</h3>
                                <div className='d-flex'>
                                    <div>
                                        <Link className='fs-4 social-icon' target='_blank' href='https://www.facebook.com/md.melon.581/'>
                                        <FaFacebook></FaFacebook>
                                    </Link>
                                    </div>
                                    <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://github.com/Melon-ali'>
                                        <FaGithub></FaGithub>
                                    </Link>
                                    <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://www.instagram.com/md.melon.581/'>
                                        <FaInstagram></FaInstagram>
                                    </Link>
                                    <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://www.linkedin.com/in/melon-ali/'>
                                        <FaLinkedin></FaLinkedin>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='form-group'>
                            <Form className='p-5'>
                                <Form.Group className="pb-4 pt-5" controlId="formBasicEmail">
                                    <Form.Control type="text" className='f-input pt-4 pb-4' placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email"
                                    className='f-input pt-4 pb-4' placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="number"
                                    className='f-input pt-4 pb-4' 
                                    placeholder="Phone" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" className='f-input pt-4 pb-4' rows={3} placeholder='Message'/>
                                    </Form.Group>
                                
                                <button className='btn-one fw-bold'>GOT IT NOW</button>
                            </Form>
                        </div>
                    </Col>
                    
                </Row>
            </div>
        </div>
    );
};

export default Contact;