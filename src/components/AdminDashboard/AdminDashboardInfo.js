import React from 'react';
import useBooking from '../Hooks/useBooking';
import { Button } from 'react-bootstrap';



const AdminDashboardInfo = (props) => {
    const { booking, setBooking } = useBooking();
    const { name, email, phone, address, date, packageName, price, duration, _id, orderStatus } = props.booked;

    // delete package
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
    };

    console.log(booking)

    // update status
    const handleUpdateStatus = id => {
        
        const url = `https://radiant-earth-20543.herokuapp.com/bookings/${id}`
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(result=>{
            if (result.modifiedCount > 0) {
                alert('Approved')
                window.location.reload();
                setBooking(booking)
            }
            
            console.log(result)
        })

        console.log('clicked', id)
    }

    return (
        <div className="container my-3">

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
                <Button onClick={() => handleUpdateStatus(_id)} className="ms-2" variant="warning">Status: {orderStatus}</Button>
            </div>
            <hr />
        </div>
    );
};

export default AdminDashboardInfo;