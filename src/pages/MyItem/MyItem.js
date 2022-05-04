import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loding';
import ManageItem from '../ManageItem/ManageItem';

const MyItem = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
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
    const handleEmailVerification = async () => {
        await sendEmailVerification();
        alert('sent');
    }
    if (!user.emailVerified) {
        return (
            <div style={{ height: '400px', padding: '100px 0' }}>
                {
                    sending ? <Loading></Loading> :
                        <>
                            <h2 className='text-center'>your email is not varified!!</h2>
                            <div className='d-flex justify-content-center mt-3'>
                                <button onClick={handleEmailVerification} className='custom-btn'>resent verification</button>
                            </div>
                        </>
                }
            </div>
        );
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