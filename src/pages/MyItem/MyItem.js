import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageItem from '../ManageItem/ManageItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setSelectedItem(id);
    };
    useEffect(() => {
        fetch(`https://limitless-falls-03357.herokuapp.com/item?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [user]);
    if (!user.emailVerified) {
        return (
            <div>
                <h2>your email is not varified</h2>
            </div>
        );
    }
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
                    const remainItem = myItem.filter(item => item._id !== id);
                    setMyItem(remainItem);
                }
            })

    }
    return (
        <div className='container mt-3'>
            {/* modal  */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-danger'>Warning!!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: 'black' }}>Are you sure to delete the item?</Modal.Body>
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
            <h2 className='text-center mt-2 mb-5'>My Item</h2>
            {
                myItem.map(item => <ManageItem key={item._id} handleShow={handleShow} item={item}></ManageItem>)
            }
        </div>
    );
};

export default MyItem;