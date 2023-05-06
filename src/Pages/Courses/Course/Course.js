import React from 'react';
import {FaBook, FaRegBookmark, FaShoppingCart, FaStar, FaUserFriends } from 'react-icons/fa';
import './Course.css';

const Course = ({course}) => {
    const {img, name, description, price, price2 } = course;

    return (
        <div>
            <div className="col">
                <div className="p-5 card-box rounded">
                    <div className=''>
                        <div className='image1'>
                            <img src={img} className="card-img-top rounded" alt="..." />
                        </div>
                    </div>
                    <div>
                        <div className='pt-3'>
                            <span className=' fs-5 star'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </span>
                            <span className='text ms-2'>(15 Reviews)</span>
                            <span className='bookmark fs-5 ms-5'><FaRegBookmark></FaRegBookmark></span>
                        </div>
                    </div>
                    <div>
                        <h2 className='mt-3'>{name}</h2>
                    </div>
                    <div className='d-flex text'>
                        <p> <FaBook></FaBook> 12 Lessons</p>
                        <p className='ms-5'> <FaUserFriends></FaUserFriends> 50 Students</p>
                    </div>
                    <p className='fs-4 text'>{description}</p>
                    <div className='d-flex justify-content-between'>
                        <h2 className="text3">${price} <del className="text-muted">${price2}</del> </h2>
                        <button className='read text2'><FaShoppingCart></FaShoppingCart> Add To Cart </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;