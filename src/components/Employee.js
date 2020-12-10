import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

  const SingleEmployee=({ employee })=>{
      return (
          <Card>
              <CardBody>
      <CardSubtitle className='font-weight-bold'>{ employee.name }</CardSubtitle>
                  <CardText> { employee.description }</CardText>
                  <Container>
                      <Button color='danger'> Delete</Button>
                      <Button color='warning ml-3'>Update</Button>
                  </Container>
              </CardBody>
          </Card>

      )
  }
  export default SingleEmployee;
