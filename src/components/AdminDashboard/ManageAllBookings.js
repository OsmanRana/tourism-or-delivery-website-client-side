import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import AllBookingDetails from './AllBookingDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const ManageAllBookings = () => {
    const {booking } = useBooking();
    const history = useHistory();
    const { user } = useAuth();
   
    return (
        <div className="container">
            <hr/>
            <h1 className="text-center text-secondary">All Bookings Details</h1>
            <hr/>
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 my-3 text-white" variant="success">My Bookings</Button></Link>
            }

            {
                user.email && <Link to="/manageallbookings" ><Button className="ms-3  text-white" variant="success">Manage All Bookings</Button></Link>
            }
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 my-3 text-white" variant="success">Add A New Service</Button></Link>
            }
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