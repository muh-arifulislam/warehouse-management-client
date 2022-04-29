import React from 'react';
import './Item.css';
const Item = ({ item }) => {
    const { name, img, quantity, id, sold, price, suplier, description } = item;
    return (
        <div className='col-lg-6 col-12'>
            <div className='item p-2 border d-flex align-items-center'>
                <div className='item-img'>
                    <img width={280} src={img} alt="" />
                </div>
                <div className='ms-3 item-details'>
                    <h4>Item: {name}</h4>
                    <p>Price: ${price}</p>
                    <p>Suplier: {suplier}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Sold: {sold}</p>
                    <p>description: {description}</p>
                    <button className='btn btn-primary'>Deliver</button>
                </div>
            </div>
        </div>
    );
};

export default Item;