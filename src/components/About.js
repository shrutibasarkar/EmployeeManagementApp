import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";

const About = () => {
    useEffect(()=>{
        document.title="About"
    },[]);
    return (
        <div>
            <Jumbotron className="text-info my-4 text-center">
                <h2 style={{ color: 'orange' }} > About Employee Management App</h2>
                <hr/>
                <h6>This WebApp is a basic version of Employee Management System. In this you can get, add, update and delete details of an employee in an organization.
                    Technologies used to develop this app are React js for Frontend, java Spring boot for backend and Mysql as database.</h6>
            </Jumbotron>

        </div>
    )
}
export default About;