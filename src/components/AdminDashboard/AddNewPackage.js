import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };

    const onSubmit = data => {
        fetch('https://radiant-earth-20543.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    alert('Package added successfully')
                    reset();
                }
            });
    };
    return (
        <div>
            <hr />
            <h2 className="text-center text-primary">Please add a new package</h2>
            <hr />
            <form className="d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Package name"   {...register("name", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Price" type='number' {...register("Price", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Duration" {...register("Duration", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Description" {...register("decription", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Image URL" {...register("image", { required: true })} />

                <input style={{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center fw-bold book d-flex align-items-center justify-content-center btn" type="submit" value="Add new Package" />
            </form>
        </div>
    );
};

export default AddNewPackage;