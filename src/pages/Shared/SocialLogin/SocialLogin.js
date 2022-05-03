import React from 'react';
import googleLogo from '../../../images/googlelogo.png';
const SocialLogin = ({ handleGoogleSignIn }) => {

    return (
        <div className='mt-3 text-center'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <button onClick={() => handleGoogleSignIn()} className='p-3 social-login-btn'>
                <img width={35} src={googleLogo} alt="" />
            </button>
        </div>
    );
};

export default SocialLogin;