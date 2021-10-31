import React, { useEffect, useState } from 'react';
import ClientsDetails from './ClientsDetails';

const HappyClients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=12')
            .then(res => res.json())
            .then(data => setClients(data.results))
    }, [])
    return (
        <div>
            <h2 className="text-center border rounded-pill py-3 text-primary">Happy <span className="text-warning">Clients</span></h2>
            <div className="row row-cols-md-3 row-cols-lg-4 my-5">
                {
                    clients?.map(client => <ClientsDetails
                        key={client.email}
                        client={client}
                    ></ClientsDetails>)
                }
            </div>
        </div>
    );
};

export default HappyClients;