import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import BookingDetails from './BookingDetails';

const Booking = () => {
    const history = useHistory();
    const { user } = useAuth();
    const { booking } = useBooking();
    return (
        <div>
            <h1 className="text-center">Bookings Details</h1>
            <div className="container">
                {
                    booking?.map(booked => <BookingDetails
                        key={booked._id}
                        booked={booked}
                    ></BookingDetails>
                    )
                }
                {
                    !user?.email && history.push('/home')
                }
            </div>
        </div>
    );
};

export default Booking;
