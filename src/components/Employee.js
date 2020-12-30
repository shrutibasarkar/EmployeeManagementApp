import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Card, CardText, CardBody, CardSubtitle, Button, Container } from 'reactstrap';
import Axios from "axios";
import base_url from "../API/springbootapi";
import { toast } from "react-toastify";


const refreshPage = () => {
    window.location.reload(false);
  }

const deleteEmployee = (id, update) => {
    Axios.delete(`${base_url}/employees/${id}`).then(
        (response) => {
            toast.success("Employee deleted")
            update(id)
        },
        (error) => {
            toast.error("Error! Couldn't delete employee.")

        }
    )
};


const SingleEmployee = ({ employee, update }) => {

    const [emp, setEmp] = useState({});
    const handleupdateForm = (e) => {
        console.log(emp);
        updateEmployee(emp);
        e.preventDefault();
        handleClose()
        refreshPage()
    };
    const updateEmployee = (data) => {
        console.log('updateing', data)
        Axios.put(`${base_url}/employees`, data).then(
            (response) => {
                console.log(response);
                toast.success("Employee updated")


            },
            (error) => {
                console.log(error);
                toast.error("Error! Couldn't update employee.")
            }
        )

    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setEmpIdAndCallHandleShow = (employeeId) => {
        console.log('employeeId-->', employeeId)
        setEmp({ ...emp, id: employeeId })
        handleShow()
    }
    // const [state, setState] = useState(false);

    return (
        <div>
            <Card>
                <CardBody>
                    <CardSubtitle className='font-weight-bold'>{employee.name}</CardSubtitle>
                    <CardText> {employee.description}</CardText>
                    <Container>
                        <Button color='danger' onClick={() => deleteEmployee(employee.id, update)}> Delete</Button>
                        <Button color='warning ml-3' onClick={() => setEmpIdAndCallHandleShow(employee.id)}>Update</Button>
                    </Container>
                </CardBody>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUpdateEmp">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name"
                                onChange={
                                    (e) => {
                                        setEmp({ ...emp, name: e.target.value })
                                    }
                                } />
                            <Form.Control.Feedback type="invalid">
                                Name cannot be empty.
          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formUpdateEmp1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" onChange={
                                (e) => {
                                    setEmp({ ...emp, description: e.target.value })
                                }
                            } />
                            {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                            <Form.Control.Feedback type="invalid">
                                Description cannot be empty.
          </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color='warning ml-3' variant="primary" onClick={handleupdateForm} disabled={!(emp.name && emp.description)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SingleEmployee;
