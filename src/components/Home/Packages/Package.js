import React from 'react';
import './Package.css'

const Package = (props) => {
    const { image, name, decription } = props.pack;
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
    console.log(props)
    return (
        <div className="container my-3">
            <img className="img-fluid image" src = {image} alt =""/>
            <h5 className="text-center my-3">{name}</h5>
            <p className="text-center">{decription.slice(0,200)}</p>
            <p style = {{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }}  className="text-center fw-bold book d-flex align-items-center justify-content-center btn">Book Now</p>
        </div>
    );
};

export default Package;