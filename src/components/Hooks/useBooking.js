import { useEffect, useState } from "react";

const useBooking = () =>{
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('https://radiant-earth-20543.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    return {
        booking, 
        setBooking
    }
};

export default useBooking;