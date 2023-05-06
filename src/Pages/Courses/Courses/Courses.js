import React, { useEffect, useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);

    return (
        <div className='container mt-5 pt-5 pb-5 mb-5 bg-color'>
            <div className='text-center mt-5 bt-5 mb-5'>
                <h5 className='courses'>COURSES</h5>
                <h1 className='fw-bold all'>Histudy All Courses</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;