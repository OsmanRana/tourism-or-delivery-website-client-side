import React from 'react';

const BookingDetails = (props) => {
    const { name, email, phone, address, date, packageName, price, duration } = props.booked
    return (
        <div>
            {name}
            {email}
            {phone}
            {address}
            {date}
            {packageName}
            {price}
            {duration}
        </div>
    );
};

export default BookingDetails;