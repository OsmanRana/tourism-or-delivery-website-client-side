import React from 'react';
import { Button } from 'react-bootstrap';



const AllBookingDetails = (props) => {

    const { name, email, phone, address, date, packageName, price, duration } = props.booked;

    const handleDeleteBooking = () => {
        alert('Please log out and log in as an Admin to delete the item. Thanks')
    }
    const handleStatusUpdate = () => {
        alert('Please log out and log in as an Admin to update the status. Thanks')
    }


    return (
        <div className="container my-3">
            <hr/>
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