import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Button } from 'react-bootstrap';

const AllPackages = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-center text-secondary">All Packages</h2>
            <hr />
            {
                user.email && <Link to="/allpackages" ><Button className="ms-3 my-3 text-white" variant="success">All packages</Button></Link>
            }

            {
                user.email && <Link to="/manageallbookings" ><Button className="ms-3  text-white" variant="success">Manage All Bookings</Button></Link>
            }
            {
                user.email && <Link to="/addnewpackage" ><Button className="ms-3 my-3 text-white" variant="success">Add A New Package</Button></Link>
            }
        </div>
    );
};

export default AllPackages;