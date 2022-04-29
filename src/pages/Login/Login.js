import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import Loading from '../Loading/Loding';
const Login = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // protected 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const handleEmailBlur = (event) => {
        SetEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        SetPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
        event.target.reset();

    }
    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <div className='w-50 mx-auto p-3 border mt-5'>
                        <h2 className='text-center'>Please Login!!</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                            </Form.Group>
                            {/* error section  */}
                            <div>
                                <p className='text-danger'>{error && error}</p>
                            </div>
                            <div>
                                <p>Are you new? please register <Link to='/register'>Register</Link></p>
                            </div>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
            }
        </>
    );
};

export default Login;