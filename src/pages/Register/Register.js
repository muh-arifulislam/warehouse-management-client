import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loding';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [error1, setError1] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            setError1('Your password did not matched!!!')
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name, email: email });
            sendEmailVerification();
            event.target.reset();

        }
    }
    return (
        <>
            {
                (loading || updating) ? <Loading></Loading> :
                    <div className='w-50 mx-auto p-3 border mt-5'>
                        <h2 className='text-center'>Please Register</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            {/* display error section  */}
                            <div>
                                {
                                    error1 && <p className='text-danger'>{error}</p>
                                }
                            </div>
                            <div>
                                <p>Already Registered? please <Link to='/login'>Login</Link></p>
                            </div>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </div>
            }
        </>
    );
};

export default Register;