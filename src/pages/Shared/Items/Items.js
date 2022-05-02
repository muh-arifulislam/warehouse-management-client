import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import useItems from '../../../hooks/useItems'
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loding';
const Items = () => {
    const [items, setItems, loading] = useItems('six-item');
    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <section className='container'>
                        <h2 className='text-center my-5'>Items</h2>
                        <div className='row g-4'>
                            {
                                items.map(item => <Item key={item._id} item={item}>
                                    <Link to={`/inventory/${item._id}`}>
                                        <button className='custom-btn'>Manage Stock</button>
                                    </Link>
                                </Item>)
                            }
                        </div>
                    </section>
            }
        </>
    );
};

export default Items;