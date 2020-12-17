import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';
import Axios from "axios";
import base_url from "../API/springbootapi";
import { toast } from "react-toastify";


  const SingleEmployee =({ employee,update })=>{
      
    const deleteEmployee=(id)=>{
        Axios.delete(`${base_url}/employees/${id}`).then(
            (response)=>{
                toast.success("Employee deleted")
                update(id)
            },
            (error)=>{
                toast.error("Error! Couldn't delete employee.")

            }
        )

    };

    const updateEmployee=(data)=>{
        Axios.put(`${base_url}/employees`).then(
            (response)=>{
                toast.success("Employee updated")
                
            },
            (error)=>{
                toast.error("Error! Couldn't update employee.")

            }
        )

    };
      return (
          <Card>
              <CardBody>
      <CardSubtitle className='font-weight-bold'>{ employee.name }</CardSubtitle>
                  <CardText> { employee.description }</CardText>
                  <Container>
                      <Button color='danger' onClick={()=>{
                          deleteEmployee(employee.id)

                      }}> Delete</Button>
                      <Button color='warning ml-3' onClick={()=>{
                          updateEmployee(employee.id)
                      }}>Update</Button>
                  </Container>
              </CardBody>
          </Card>

      )
  }
  export default SingleEmployee;
