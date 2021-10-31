import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import BookingDetails from './BookingDetails';

const Booking = () => {
    const history = useHistory();
    const { user } = useAuth();
    const { booking } = useBooking();

    const matchedBooking = booking?.filter(booked => booked.email === user.email)

    

    return (
        <div className="container ">
            <hr />
            <h1 className="text-center text-secondary">Your Bookings Details</h1>
            <hr />
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 my-3 text-white" variant="success">My Bookings</Button></Link>
            }

            {
                user.email && <Link to="/manageallbookings" ><Button className="ms-3 text-white" variant="success">Manage All Bookings</Button></Link>
            }
            {
                user.email && <Link to="/addnewpackageuser" ><Button className="ms-3 my-3 text-white" variant="success">Add A New Package</Button></Link>
            }
            <div className="container my-3">
                {
                    matchedBooking?.map(booked => <BookingDetails
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
