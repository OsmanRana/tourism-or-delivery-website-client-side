import React from 'react';
import { Card } from 'react-bootstrap';

const ClientsDetails = (props) => {
    const { name, picture, location, email } = props.client
    return (
        <div className="my-3">
            <Card className="border-0 shadow rounded">
                <Card.Img className="rounded-circle img-fluid w-50 mx-auto d-block my-3" variant="top" src={picture.large} />
                <Card.Body className="text-center">
                    <Card.Title>{name.title} {name.first} {name.last}</Card.Title>
                    <Card.Text>
                        <small>{email}</small>
                        <br/>
                        <small>{location.city}, {location.country} </small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClientsDetails;