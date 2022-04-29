import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import useItems from '../../../hooks/useItems'
const Items = () => {
    const [items, setItems] = useItems();
    return (
        <section className='container'>
            <h2 className='text-center my-5'>Items</h2>
            <div className='row gy-3'>
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </section>
    );
};

export default Items;