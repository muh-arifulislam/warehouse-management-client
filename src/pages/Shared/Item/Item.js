import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ item, children }) => {
    const { name, img, quantity, _id, sold, price, suplier, description } = item;
    return (
        <div className='col-lg-6 col-12'>
            <div className='item p-3 d-flex align-items-center'>
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
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;