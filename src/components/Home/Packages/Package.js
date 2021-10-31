import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const { image, name, decription, _id } = props.pack;

    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };

    return (
        <div className="container my-3">
            <img className="img-fluid image" src={image} alt="" />
            <h5 className="text-center my-3">{name}</h5>
            <p className="text-center">{decription.slice(0, 200)}</p>
            <Link className="text-decoration-none" to={`/packages/${_id}`}><p style={{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center fw-bold book d-flex align-items-center justify-content-center btn">Book Now</p></Link>
        </div>
    );
};

export default Package;