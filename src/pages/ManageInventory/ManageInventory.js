import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';
import './ManageInventory.css';
import Loading from '../Loading/Loding';
const ManageInventory = () => {
    const [items, setItems, loading] = useItems('all-item');
    const [selectedItem, setSelectedItem] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setSelectedItem(id);
    };
    const handleDeleteItem = (id) => {
        fetch(`https://limitless-falls-03357.herokuapp.com/item/${id}`, {
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
        <>
            {
                loading ? <Loading></Loading> :
                    <div className='container manange-inventory-container'>
                        {/* modal  */}
                        <>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className='text-danger'>Warning!!!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ color: 'black' }}>Are you sure to delete this item?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="danger" onClick={() => {
                                        handleClose();
                                        handleDeleteItem(selectedItem);
                                    }}>
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <h1 className='my-4 text-center'>Manage Item</h1>
                        <div className='manage-btn-container d-flex justify-content-center'>
                            <Link to='/add-new-item'>
                                <button className='py-2 px-5 custom-btn manage-btn' style={{ fontSize: '20px' }}>Add New Item</button>
                            </Link>
                        </div>
                        <div className='row manange-inventory'>
                            {
                                items.map(item => <ManageItem key={item._id} handleShow={handleShow} item={item}></ManageItem>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default ManageInventory;