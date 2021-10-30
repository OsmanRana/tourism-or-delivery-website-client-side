import React from 'react';
import useBooking from '../Hooks/useBooking';
import { Button } from 'react-bootstrap';

const AllBookingDetails = (props) => {
    const { booking, setBooking } = useBooking();
    const { name, email, phone, address, date, packageName, price, duration, _id } = props.booked;

    const handleDeleteBooking = id => {
        const url = `https://radiant-earth-20543.herokuapp.com/bookings/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0)
                    alert('Deleted Successfully')
                const remainingBookings = booking?.filter(booked => booking._id !== id);
                window.location.reload();
                setBooking(remainingBookings);

            });
    }

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{date}</p>
            <p>{packageName}</p>
            <p>{price}</p>
            <p>{duration}</p>
            <Button onClick={() => handleDeleteBooking(_id)} variant="danger">Delete</Button>
            <Button className="ms-2" variant="warning">Status: Pending</Button>
        </div>
    );
};

export default AllBookingDetails;