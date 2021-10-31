import React from 'react';
import { useForm } from 'react-hook-form';

const CustomPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const color2 = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) };
    const onSubmit = data => {
        alert('We received your query and will contact you soon. Thanks');
        reset();
    };
    return (
        <div className="shadow p-5 rounded">
            <div  className="text-center border rounded-pill p-4">
                <h2 className="text-center text-primary">CUSTOM <span className="text-warning">PACKAGES</span></h2>
                <small className="text-muted">Please let us kmow your requirements and we will provide you the best custom packages</small>
            </div>
            <form className="d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Your Full name please"   {...register("name", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Phone number Please" type='number' {...register("phone", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Your address please" {...register("address", { required: true })} />
                <textarea className="my-3 py-3 border-0 border-bottom" placeholder="Your requirements please" {...register("decription", { required: true })} />
                <input className="my-3 py-3 border-0 border-bottom" placeholder="Places you want to visit" {...register("place", { required: true })} />

                <input style={{ backgroundColor: "rgb(" + color2.red + "," + color2.green + "," + color2.blue + ")" }} className="text-center fw-bold book d-flex align-items-center justify-content-center btn" type="submit" value="Add new Package" />
            </form>
        </div>
    );
};

export default CustomPackage;