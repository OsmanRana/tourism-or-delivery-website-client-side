import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import AllBookingDetails from './AllBookingDetails';



const ManageAllBookings = () => {
    const {booking } = useBooking();
    const history = useHistory();
    const { user } = useAuth();
   
    return (
        <div>
            <h1 className="text-center">All Bookings Details</h1>
            <div className="container">
                {
                    booking?.map(booked => <AllBookingDetails
                        key={booked._id}
                        booked={booked}
                    ></AllBookingDetails>
                    )
                }
                {
                    !user?.email && history.push('/home')
                }
            </div>
        </div>
    );
};

export default ManageAllBookings;