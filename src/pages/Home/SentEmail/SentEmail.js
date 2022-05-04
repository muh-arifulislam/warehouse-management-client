import React from 'react';
import { useForm } from 'react-hook-form';
import './SentEmail.css'
const SentEmail = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        fetch('https://limitless-falls-03357.herokuapp.com/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                if (data.acknowledged) {
                    alert('message sending successful!!')
                };

            })
    };
    return (
        <section className='mt-5 py-5 feedback-container'>
            <div className='container'>
                <div className="row g-3">
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <div style={{ backgroundColor: 'gainsboro' }} className='border rounded p-5 w-75'>
                            <p className='fs-2 fw-bold'>Stay with us. <br />Feel free to sent your Message.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='w-100 form-container p-5'>
                            <form className='' onSubmit={handleSubmit(onSubmit)}>
                                <label className='ms-2' htmlFor="name">Name</label>
                                <input className='d-block mb-3 px-2 py-2 w-100' {...register("name")} required />
                                <label className='ms-2' htmlFor="email">Email</label>
                                <input type='email' className='d-block mb-3 px-2 py-2 w-100' {...register("email")} required />
                                <label className='ms-2' htmlFor="message">Your Message</label>
                                <textarea className='d-block mb-3 px-2 py-2 w-100' {...register("message")} required />
                                <div className='d-flex justify-content-center'>
                                    <input className='d-block mb-3 px-5 form-submit-btn fs-5' value='Sent' type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SentEmail;