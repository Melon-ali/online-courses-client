import React from 'react';
import './About.css';
import about from '../../assets/images/about-06.png';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='pt-5 pb-5'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className='p-2 m-auto video-img'>
                            <img src={about} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='p-4 justify-content-start'>
                            <div className='video-text d-flex align-items-center'>
                                <span className='video fw-bold'>ABOUT HISTUDY</span>
                            </div>
                            <h1 className='online pt-2 pb-2 fw-bold'>What is Histudy For You?.</h1>
                            <p className='p-text pt-4 pb-3'><span className='fw-bold'>Histudy educational platform</span> ipsum dolor sit amet consectetur adipisicing elit. Nam inventore praesentium alias incidunt! Veritatis, necessitatibus fuga dolore tenetur, beatae suscipit fugit est ea perspiciatis quo provident nisi dolor similique architecto nihil.</p>
                            <div>
                                <button className='btn-one'>More About Us</button>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </div>
        </div>
    );
};

export default About;