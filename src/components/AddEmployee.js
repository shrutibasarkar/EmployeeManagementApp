import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const AddEmployee = () => {
    return (
        <Fragment>
            <h3 className='App'> Add Employee details:</h3>
            <Form>
                <FormGroup>
                    <Label for="EmployeeID">Employee ID</Label>
                    <Input type="text" name="EmployeeID" id="empID" placeholder="Enter Employee ID" />
                </FormGroup>
                <FormGroup>
                    <Label for="EmployeeName">Employee Name</Label>
                    <Input type="text" name="EmployeeName" id="empName" placeholder="Enter Employee Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="EmployeeDescription">Employee Description</Label>
                    <Input type="textarea" name="EmployeeDescription" id="EmpDescription" />
                </FormGroup>
                <Container>
                    <Button color='success'>Add Employee</Button>
                    <Button color='warning ml-3'>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddEmployee;
