import React from 'react';
import useItem from '../../hooks/useItem';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';
import './ManageInventory.css';
const ManageInventory = () => {
    const [items, setItems] = useItems();
    const handleDeleteItem = (id) => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainItem = items.filter(item => item._id !== id);
                    setItems(remainItem);
                }
            })
    }
    return (
        <div className='container manange-inventory-container'>
            <h1 className='my-5 text-center'>Manage Item</h1>
            <div className='manage-btn-container p-3 d-flex justify-content-center'>
                <button className='py-2 px-5' style={{ fontSize: '20px' }}>Add New Item</button>
            </div>
            <div className='row manange-inventory'>
                {
                    items.map(item => <ManageItem key={item._id} handleDeleteItem={handleDeleteItem} item={item}></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;