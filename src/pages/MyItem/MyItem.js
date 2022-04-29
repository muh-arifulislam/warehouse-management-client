import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    if (!user.emailVerified) {
        return (
            <div>
                <h2>your email is not varified</h2>
            </div>
        );
    }
    return (
        <div>
            <h2>this is my item</h2>
        </div>
    );
};

export default MyItem;