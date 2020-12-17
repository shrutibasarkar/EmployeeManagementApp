import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    },[]);
    return (
        <div>
            <Jumbotron className="text-info my-4 text-center">
                <h2 style={{ color: 'orange' }}> Employee Management System</h2>
                <hr/>
                <h6>This App is developed by Shruti Basarkar as a part of personal projects for learning purpose. Spring boot is used for backend and Mysql is used for database.</h6>
            </Jumbotron>

        </div>
    )
}
export default Home;