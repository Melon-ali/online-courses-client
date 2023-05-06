import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/learning`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div className='container mt-5 pt-5 pb-5 mb-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;