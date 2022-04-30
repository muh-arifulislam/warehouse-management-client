import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import Item from '../Shared/Item/Item';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='d-flex justify-content-center mt-5 mx-3'>
            <Item item={item}>
                <button className='btn btn-primary'>Delivered</button>
            </Item>
        </div>
    );
};

export default Inventory;