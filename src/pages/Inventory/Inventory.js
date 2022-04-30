import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import Loading from '../Loading/Loding';
import Item from '../Shared/Item/Item';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [modifiedCount, setModifiedCount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [modifiedCount]);
    const handleDelivered = () => {
        setLoading(true);
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(async data => {
                const newCount = modifiedCount + data.modifiedCount;
                await setModifiedCount(newCount);
                setLoading(false);

            })
    }
    return (
        <>
            {
                loading ? <Loading></Loading>
                    : <div className='d-flex justify-content-center mt-5 mx-3'>
                        <Item item={item}>
                            <button onClick={handleDelivered} className='btn btn-primary'>Delivered</button>
                        </Item>
                    </div>
            }
        </>
    );
};

export default Inventory;