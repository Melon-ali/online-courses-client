import React from 'react';
import './Employee.css';
import { FaArrowRight } from 'react-icons/fa';

const Employee = ({employee}) => {
    const {name, title, img, description} = employee;
    return (
        <div>
            <div className="col">
                <div className="p-5 card-box rounded">
                    <div className='d-flex align-items-center'>
                            <div className='image2'>
                                <img src={img} class="card-img-left" alt="..." />
                            </div>
                            <div className='ms-3'>
                                <h4 class="fw-bold">{name}</h4>
                                <h5 className='text'>{title}</h5>
                            </div>
                    </div>
                    <div class="text">
                        <p class="text2">{description}</p>
                        <button  className='read text2'>Read Project Case Study <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;