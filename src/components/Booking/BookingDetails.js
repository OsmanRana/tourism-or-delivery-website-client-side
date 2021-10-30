import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';

const BookingDetails = (props) => {
    const { booking, setBooking } = useBooking();
    const { user } = useAuth();
    const { name, email, phone, address, date, packageName, price, duration, _id } = props.booked



    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://radiant-earth-20543.herokuapp.com/bookings/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        alert('Deleted Successfully')
                    const remainingBookings = booking?.filter(book => book._id !== id)
                    window.location.reload();
                    setBooking(remainingBookings);
                });
        }
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
            {
                user.email === email && <div>
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
            }

        </div>
    );
};

export default BookingDetails;