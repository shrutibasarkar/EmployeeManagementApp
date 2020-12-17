import React, { Fragment, useEffect,useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from './../API/springbootapi';

const AddEmployee = () => {
    useEffect(()=>{
        document.title="AddEmployee"
    },[]);

    const [employee, setEmployee] = useState({});

    //handle form function

    const handleForm=(e)=>{
        console.log(employee);
        addEmployeesToServer(employee);
        e.preventDefault();

    };

    //creating function to save data on server
const addEmployeesToServer=(data)=>{
    axios.post(`${base_url}/employees`,data).then(
        (response)=>{
            console.log(response);
            toast.success(" Employee added successfully!");
            // setEmployees(response.data)
        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong! check your server")

        }
        
    );
};
    return (
        <Fragment>
            <h3 className='App'> Add Employee details:</h3>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="id">Employee ID</Label>
                    <Input type="text" name="EmployeeID" id="id" placeholder="Enter Employee ID" onChange={
                        (e)=>{
                            setEmployee({...employee,id:e.target.value })
                        }
                    } />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Employee Name</Label>
                    <Input type="text" name="EmployeeName" id="name" placeholder="Enter Employee Name" onChange={
                        (e)=>{
                            setEmployee({...employee,name:e.target.value })
                        }
                    } />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Employee Description</Label>
                    <Input type="textarea" name="description" id="EmpDescription" onChange={
                        (e)=>{
                            setEmployee({...employee,description:e.target.value })
                        }
                    } />
                </FormGroup>
                <Container>
                    <Button type="submit" color='success'>Add Employee</Button>
                    <Button color='warning ml-3' type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddEmployee;
