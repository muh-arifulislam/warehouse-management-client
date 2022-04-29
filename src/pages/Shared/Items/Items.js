import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <section className='container'>
            <h2>this is item: {items.length}</h2>
            <div className='row gy-3'>
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </section>
    );
};

export default Items;