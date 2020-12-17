import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";

const Contact = () => {
    useEffect(()=>{
        document.title="Contact"
    },[]);
    return (
        <div>
            <Jumbotron className="text-info my-4 text-center">
                <h2 style={{ color: 'orange' }} > Shruti Basarkar</h2>
                <hr/>
                <h6> Email: shrutibasarkar21@gmail.com</h6>
                <h6> <a href='https://www.linkedin.com/in/shruti-basarkar/' target='blank'>Connect on LinkedIn</a></h6>
                <h6> <a href='https://github.com/shrutibasarkar' target='blank'>Connect on GitHub</a></h6>
            </Jumbotron>

        </div>
    )
}
export default Contact;