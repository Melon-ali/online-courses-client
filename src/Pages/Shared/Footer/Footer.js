import React from 'react';
import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import { FaArrowRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container pt-5 pb-5 mt-5 mb-5">
                <Row>
                    <Col lg={5}>
                        <img src={logo} alt="" />
                        <p className='fs-4 pb-3 p-color pt-3'>We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
                        <button className='btn-footer fw-bold'>Contact With Us <FaArrowRight></FaArrowRight></button>
                    </Col>
                    <Col lg={7}>
                        <div className='d-flex'>
                            <div className='fs-2'>
                                <h5 className='fw-bold'>Useful Links</h5>
                                <div>
                                    <div ><Link className='footer-list'>Marketplace</Link></div>
                                    <div><Link className='footer-list'>kindergarten</Link></div>
                                    <div><Link className='footer-list'>University</Link><Link className='footer-list'>University</Link></div>
                                    <div><Link className='footer-list'>GYM Coaching</Link></div>
                                    <div><Link className='footer-list'>FAQ</Link></div>
                                </div>
                            </div>
                            <div>
                                <div className='fs-2 ms-5'>
                                    <h5 className='fw-bold'>Our Company</h5>
                                    <div>
                                        <div><Link className='footer-list'>Contact Us</Link></div>
                                        <div><Link className='footer-list'>Become Teacher</Link></div>
                                        <div><Link className='footer-list'>Blog</Link><Link className='footer-list'>Instructor</Link></div>
                                        <div><Link className='footer-list'>Events</Link></div>
                                        <div><Link className='footer-list'>Events</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='fs-2 ms-5'>
                                    <h5 className='fw-bold'>Get Contact</h5>
                                    <div className='fs-5'>
                                        <div className='mt-3'>Phone:+8801738349069</div>
                                        <div className='mt-3'>E-mail:melonali200@gmail.com</div>
                                        <div className='mt-3'>Location:Rajshahi,Bangladesh</div>
                                        <div className='d-flex mt-3'>
                                            <div>
                                                <Link className='fs-4 social-icon' target='_blank' href='https://www.facebook.com/md.melon.581/'>
                                                <FaFacebook></FaFacebook>
                                                </Link> 
                                            </div>
                                            <div>
                                                <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://github.com/Melon-ali'>
                                                    <FaGithub></FaGithub>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://www.instagram.com/md.melon.581/'>
                                                <FaInstagram></FaInstagram>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className='ms-4 fs-4 social-icon' target='_blank' to='https://www.linkedin.com/in/melon-ali/'>
                                                <FaLinkedin></FaLinkedin>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Footer;