import React from 'react';
import { ListGroup } from 'reactstrap';
import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <ListGroup>
            <Link className='list-group-item list-group-item-action' tag="a" to="/" action>Home</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="#" action>About</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/view-employees" action> View Employees</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/add-employee" action>Add Employee</Link>
            <Link className='list-group-item list-group-item-action' disabled tag="a" to="/contact" action>Contact</Link>
        </ListGroup>

    )
}
export default Menu;