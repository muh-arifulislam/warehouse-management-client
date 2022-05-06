import React from 'react';
import './NotFound.css';
import image from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div className='container not-found-container'>
            <img className='img-fluid' src={image} alt="" />
        </div>
    );
};

export default NotFound;