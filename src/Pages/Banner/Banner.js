import React from 'react';
import './Banner.css';
import { Col, Row } from 'react-bootstrap';
import { FaPhotoVideo, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import client from '../../assets/images/client-02.png';
import video from '../../assets/images/video-02.jpg';

const Banner = () => {
    return (
        <div className='banner pt-5 pb-5'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className='p-4 justify-content-start'>
                            <div className='video-text d-flex align-items-center'>
                                <span className='video fw-bold'><span><FaPhotoVideo></FaPhotoVideo></span> Video Online Courses</span>
                                <Link className='image ms-5 d-flex align-items-center' href="#">
                                    <div className='m-2'><img src={client} alt="" /></div>
                                    Lear with <strong className='me-2'>Fatima Asrafy</strong>
                                </Link>
                            </div>
                            <h1 className='online mb-4 fw-bold'>Online Courses</h1>
                            <p className='mt-2 fw-semibold p-text'>Dive in and learn React.js from scratch! Learn React js, Hooks, Redux, React Routing, Animations, Next.js and way more!</p>
                            <div>
                                <button className='btn-one'>Login To Start <FaArrowRight></FaArrowRight></button>
                                <button className='btn-two ms-4'>Buy The Course <FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='p-5 m-auto video-img'>
                            <img src={video} alt="" />
                            
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;