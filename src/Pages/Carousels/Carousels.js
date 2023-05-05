import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';

const Carousels = () => {

    const [carousels, setCarousels] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/trainer`)
        .then(res => res.json())
        .then(data => setCarousels(data))
    } ,[]);

    return (
        <div className='container text-center mt-5 mb-5'>
            <div  className="row row-cols-1 row-cols-md-4 g-4">
                {
                    carousels.map(carousel => <Carousel
                        key={carousel.id}
                        carousel={carousel}
                    ></Carousel>)
                }
            </div>
        </div>
    );
};

export default Carousels;