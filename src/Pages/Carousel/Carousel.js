import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({carousel}) => {

    const {name, img, image} = carousel;

    return (
        <div>
            <div className="col">
                <div className="p-3 card-box rounded">
                    <div className=''>
                        <div className='image1'>
                            <img src={image} class="card-img-top rounded" alt="..." />
                        </div>
                    </div>
                    <div>
                        <div className='image2'>
                            <img src={img} className="card-img-center" alt="..." />
                        </div>
                    </div>
                    <div>
                        <h4 className='mt-3'>{name}</h4>
                    </div>
                    <div className="text">
                        <button className='read text2'>20 Courses <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;