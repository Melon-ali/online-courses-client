import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description} = service;
    return (
        <div>
            <div className="col">
                <div className="p-5 card-box c-box rounded">
                    <div className=''>
                        <div className='image1'>
                            <img src={img} class="card-img-left" alt="..." />
                        </div>
                    </div>
                    <div>
                        <h4 className='mt-3 pt-2 pb-2'>{name}</h4>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;