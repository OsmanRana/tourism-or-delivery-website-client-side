import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddNewPackageUser = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
    const history = useHistory()
    const onSubmit = data => {
        alert('Please log out and log in as an Admin');
    }
    return (
        <div>
            <hr />
            <h2 className="text-center text-secondary">Please add a new package User</h2>
            <hr />
            {
                user.email && <Link to="/mybookings" ><Button className="ms-3 my-3 text-white" variant="success">My Bookings</Button></Link>
            }

            {
                user.email && <Link to="/manageallbookings" ><Button className="ms-3 text-white" variant="success">Manage All Bookings</Button></Link>
            }
            {
                user.email && <Link to="/addnewpackageuser" ><Button className="ms-3 my-3 text-white" variant="success">Add A New Package</Button></Link>
            }
            <form className="d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Package name"   {...register("name", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Price" type='number' {...register("Price", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Duration" {...register("Duration", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Description" {...register("decription", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Image URL" {...register("image", { required: true })} />

                <input style={{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center fw-bold book d-flex align-items-center justify-content-center btn" type="submit" value="Add new Package" />
            </form>
            {
                !user.email && history.push('/login')
            }
        </div>
    );
};

export default AddNewPackageUser;