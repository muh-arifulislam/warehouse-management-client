import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import Loading from '../Loading/Loding';
import Item from '../Shared/Item/Item';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [modifiedCount, setModifiedCount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`https://limitless-falls-03357.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [modifiedCount]);
    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity) - 1;
        const newSold = parseInt(item.sold) + 1;
        setLoading(true);
        fetch(`https://limitless-falls-03357.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity, newSold })
        })
            .then(res => res.json())
            .then(async data => {
                const newCount = modifiedCount + data.modifiedCount;
                await setModifiedCount(newCount);
                setTimeout(() => {
                    setLoading(false)
                }, 1000);

            })
    }
    const [newItemQuantity, setNewItemQuantity] = useState(0);
    const handleNewItemQuantity = (event) => {
        setNewItemQuantity(event.target.value)
    }
    const handleRestock = event => {
        event.preventDefault();
        setLoading(true);
        const newQuantity = parseInt(item.quantity) + parseInt(newItemQuantity);
        const newSold = parseInt(item.sold);
        fetch(`https://limitless-falls-03357.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity, newSold })
        })
            .then(res => res.json())
            .then(async data => {
                const newCount = modifiedCount + data.modifiedCount;
                await setModifiedCount(newCount);
                setTimeout(() => {
                    setLoading(false);
                    setNewItemQuantity(0);
                }, 1000);

            })
    }
    return (
        <>
            {
                loading ? <Loading></Loading>
                    : <div className='d-flex flex-column align-items-center justify-content-center mt-5 mx-3'>
                        <Item item={item}>
                            <button onClick={handleDelivered} className='btn btn-primary'>Delivered</button>
                        </Item>
                        <div className='restock-container p-3 border mt-5 mx-3'>
                            <h3 className='text-center'>Restock {item.name}</h3>
                            <form className='mt-3' onSubmit={handleRestock}>
                                <input onBlur={handleNewItemQuantity} className='d-block w-75 mx-auto mb-3' type="number" name="stockedItem" id="" placeholder='enter new stocked number' />
                                <input className='d-block w-25 mx-auto mb-3' type="submit" value="Restock" />
                            </form>
                        </div>
                    </div>
            }
        </>
    );
};

export default Inventory;