import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import BookingDetails from './BookingDetails';

const Booking = () => {
    const history = useHistory()
    const { user } = useAuth()
    const [booking, setBooking] = useState([])
    console.log(booking)
    useEffect(() => {
        fetch('https://radiant-earth-20543.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            <h1 className="text-center">Bookings Details</h1>
            {
                booking?.map(booked => <BookingDetails
                    key={booked._id}
                    booked={booked}
                ></BookingDetails>)
            }
            {
                !user?.email && history.push('/home')
            }
        </div>
    );
};

export default Booking;