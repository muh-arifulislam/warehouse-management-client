import React from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const User = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='m-5 p-5 border rounded custom-responsive-w mx-auto'>
            <div className='d-flex justify-content-center'>
                {
                    user?.photoURL ? <img style={{ borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                        <UserCircleIcon width={150}></UserCircleIcon>
                }

            </div>
            <p className='text-center mt-3'>Name: {user?.displayName || 'unKnown'}</p>
            <p className='text-center'>Email: {user?.email || 'unKnown'}</p>
        </div>
    );
};

export default User;