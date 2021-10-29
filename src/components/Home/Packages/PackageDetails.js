import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const [pack, setPack] = useState([]);
    const {packageId} = useParams();
    const {image, name, Duration, Price, decription} = pack;
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
useEffect(()=>{
    const url =`https://radiant-earth-20543.herokuapp.com/packages/${packageId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setPack(data))
},[packageId])


    console.log(pack)
    return (
        <div className="container">
            <h2 className="text-center my-5 text-primary" >PACKAGE DETAILS</h2>
            <div className="text-center d-flex align-items-center justify-content-evenly my-3">
                <h5>Price: {Price}</h5>
                <h5>Duration: {Duration}</h5>
            </div>
            <img className="img-fluid rounded mx-auto d-block" src={image} alt=""/>
            <h5 className="text-center my-3">{name}</h5>
            <p className="text-justify">{decription}</p>
            <p  style = {{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }}  className="text-center fw-bold book d-flex align-items-center justify-content-center btn">Confirm Now</p>
            
        </div>
    );
};

export default PackageDetails;