import React from "react";
import { Card, CardBody } from "reactstrap";

function Header(){
    return(
        <Card className="text-info my-4">
            <CardBody className="App">
            <h2 className='my-4'> Welcome to Employee Management System</h2>
            </CardBody>
        </Card>
        
    )
}
export default Header;