import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneFlip, faLocationDot, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year);
    return (
        <footer className=''>
            <div className='container'>
                <div className="row py-5">
                    <div className="col-6">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                            <FontAwesomeIcon className='me-1 fs-4' icon={faWarehouse}></FontAwesomeIcon><span className='site-heading fs-4'>BISMILLAH TRADERS</span>
                        </Link>
                        <p>
                            We provide you the best warehouse services. We also provide our services 24/7. You can store your product safely. We deliver your product any time. Stay with us.
                        </p>
                    </div>
                    <div className="col-6">
                        <h4>Get In Touch</h4>
                        <p className='my-2'> <FontAwesomeIcon className='me-3' icon={faLocationDot}></FontAwesomeIcon>Paduar Bajar Biswaroad, Sadar South, Cumilla</p>
                        <p className='my-2'><FontAwesomeIcon className='me-3' icon={faPhoneFlip}></FontAwesomeIcon>+88019XXXXXXXX</p>
                        <p className='my-2'><FontAwesomeIcon className='me-3' icon={faEnvelope}></FontAwesomeIcon>example@gmail.com</p>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black', color: 'gainsboro' }} className='container py-3'>
                    <p className='text-center m-0'> <small>&copy;{year} BISMILLAH TRADERS, All Rights Reserved</small></p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;