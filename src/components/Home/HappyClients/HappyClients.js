import React from 'react';
const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
const HappyClients = () => {
    return (
        <div>
            <h2 style = {{ color: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center border rounded-pill py-3">Hear from our happy Souls...</h2>
        </div>
    );
};

export default HappyClients;