import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
    const handleSubmit = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
        event.target.reset();
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>this is login page</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmailBlur} className='d-block mb-2 w-100' type="email" name='email' placeholder='your email' />
                <input onBlur={handlePasswordBlur} className='d-block mb-2 w-100' type="password" name="password" placeholder='password' required />
                <input className='d-block mb-2 w-100' type="submit" value="Login" />
            </form>
            <div>
                <p>Are you new? please register <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;