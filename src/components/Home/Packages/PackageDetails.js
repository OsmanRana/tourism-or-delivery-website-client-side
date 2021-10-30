import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PackageDetails = () => {
    const [pack, setPack] = useState([]);
    const {user} = useAuth();
    const { packageId } = useParams();
    const { image, name, Duration, Price, decription } = pack;
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
    useEffect(() => {
        const url = `https://radiant-earth-20543.herokuapp.com/packages/${packageId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [packageId]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId) {
                alert('Booking placed successfully')
                reset()
            }
            console.log(result)
        })
        console.log(data);
    } 
    return (
        <div className="container">
            <h2 className="text-center my-5 text-primary" >PACKAGE DETAILS</h2>
            <div className="text-center d-flex align-items-center justify-content-evenly my-3">
                <h5>Price: {Price}</h5>
                <h5>Duration: {Duration}</h5>
            </div>
            <img className="img-fluid rounded mx-auto d-block" src={image} alt="" />
            <h5 className="text-center my-3">{name}</h5>
            <p className="text-justify">{decription}</p>
            <form className="d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Full Name"  defaultValue={user?.displayName}  {...register("name", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Email" defaultValue={user?.email} readOnly {...register("email", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Mobile Phone Number Please" type="number" {...register("phone", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Your address Please" {...register("address", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Date" type="date" {...register("date", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Price" defaultValue={Price} readOnly {...register("price", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Duration" defaultValue={Duration} readOnly {...register("duration", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="BookingId" defaultValue={packageId} readOnly {...register("bookingId", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Event" defaultValue={name} readOnly {...register("packageName", { required: true })} />
                <input style={{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center fw-bold book d-flex align-items-center justify-content-center btn" type="submit" value="Confirm Now" />
            </form>
        </div>
    );
};

export default PackageDetails;