import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AllBookingDetails = (props) => {
const {user} = useAuth();
    const { name, email, phone, address, date, packageName, price, duration } = props.booked;

    const handleDeleteBooking = () => {
        alert('Please log in as an Admin to delete the item. Thanks')
    }
    const handleStatusUpdate = () => {
        alert('Please log in as an Admin to update the status. Thanks')
    }


    return (
        <div>
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 text-white" variant="success">My Bookings</Button></Link>
            }

            {
                user.email && <Link to="/manageallbookings" ><Button className="ms-3 text-white" variant="success">Manage All Bookings</Button></Link>
            }
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 text-white" variant="success">Add A New Service</Button></Link>
            }
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{date}</p>
            <p>{packageName}</p>
            <p>{price}</p>
            <p>{duration}</p>
            <Button onClick={handleDeleteBooking} variant="danger">Delete</Button>
            <Button onClick={handleStatusUpdate} className="ms-2" variant="warning">Status: Pending</Button>
        </div>
    );
};

export default AllBookingDetails;