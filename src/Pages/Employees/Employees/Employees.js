import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/employees`)
        .then(res => res.json())
        .then(data => setEmployees(data))
    }, []);

    console.log(employees)

    return (
        <div className='container mt-5 mb-5'>
            <div  class="row row-cols-1 row-cols-md-3 g-4">
                {
                    employees.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                    ></Employee>)
                }
            </div>
        </div>
    );
};

export default Employees;