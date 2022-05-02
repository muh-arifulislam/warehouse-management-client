import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Loading/Loding';
import './AddItem.css';
const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = (data, event) => {
        setLoading(true);
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTimeout(() => {
                    event.target.reset();
                    setLoading(false);
                }, 1000)

            })
    };
    return (
        <div className='custom-responsive-w mx-auto mt-3 px-4 py-2 border'>
            {
                loading && <Loading></Loading>
            }
            <h2 className='text-center my-2'>Add New Item</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item name' {...register("name")} required />
                <input className='d-block mb-3 px-2 py-2 w-100' value={user?.email} {...register("email")} readOnly />
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item img url' {...register("img")} required />
                <textarea className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item description' {...register("description")} required />
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item price' {...register("price")} required />
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item quantity' {...register("quantity")} required />
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter item sold' {...register("sold")} required />
                <input className='d-block mb-3 px-2 py-2 w-100' placeholder='enter supplier name' {...register("suplier")} required />
                <div className='d-flex justify-content-center'>
                    <input className='d-block mb-3 py-2 px-3' value='Add Item' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;