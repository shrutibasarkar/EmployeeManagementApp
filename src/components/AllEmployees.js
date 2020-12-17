import React, { useState, useEffect } from 'react';
import SingleEmployee  from './Employee';
import base_url from './../API/springbootapi';
import axios from 'axios';
import { toast } from 'react-toastify';


const AllEmployees = () => {

    useEffect(()=>{
        document.title="View Employees"
    },[]);

    //function to call  server
const getAllEmployeesFromServer=()=>{
    axios.get(`${base_url}/employees`).then(
        (response)=>{
            console.log(response.data);
            setEmployees(response.data)
        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong! check your server")

        }
        
    );
};

//calling getAllEmployeesFromServer function
useEffect(()=>{
    getAllEmployeesFromServer();
},[]);

    const [employees, setEmployees] = useState([]);

//function is called to update the list of employees when employee is deleted 
    const updateEmployeeList = (id)=>{
        setEmployees(employees.filter((emp)=>emp.id!=id));
    } 
    return (

        <div>
            <h3>List of all employees:</h3>
            {
                employees.length > 0 ? employees.map((item) => 
                    <SingleEmployee key={item.emp_id} employee={item} update= {updateEmployeeList}/>): "No Employee found"


            }

        </div>
    )
}
export default AllEmployees;