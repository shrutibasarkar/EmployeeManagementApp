import React, { useState } from 'react';
import SingleEmployee  from './Employee';


const AllEmployees = () => {
    const [employees, setEmployees] = useState([

        { name: "Shruti", description: "English teacher" },
        { name: "Vikas", description: "Maths teacher" },
        { name: "Ram", description: "Hindi teacher" },
    ]);
    return (

        <div>
            <h3>List of all employees:</h3>
            {
                employees.length > 0 ? employees.map((item) => 
                    <SingleEmployee employee={item} />): "No Employee found"


            }

        </div>
    )
}
export default AllEmployees;