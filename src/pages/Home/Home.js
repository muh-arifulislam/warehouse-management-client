import React from 'react';
import { Link } from 'react-router-dom';
import MyCarousel from '../MyCarousel/MyCarousel';
import Items from '../Shared/Items/Items';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <Items></Items>
            <div className='d-flex justify-content-center my-4'>
                <Link to='/manage-inventory'>
                    <button className='custom-btn py-3 px-3 fs-5'>
                        Manage Inventory
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;