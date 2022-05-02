import React from 'react';
import './ManageItem.css';
const ManageItem = ({ item, handleShow }) => {
    const { name, price, quantity, _id } = item;
    return (
        <div className='col-lg-12 p-2 row gx-2 text-center fs-5 manage-item-row'>
            <div className="col-3">
                <div className="p-3 border manage-item">{name}</div>
            </div>
            <div className="col-3">
                <div className="p-3 border manage-item">${price}</div>
            </div>
            <div className="col-3">
                <div className="p-3 border manage-item">quantity={quantity}</div>
            </div>
            <div className="col-3">
                <div onClick={() => handleShow(_id)} className="p-3 border delete-item">Delete Item</div>
            </div>
        </div>
    );
};

export default ManageItem;