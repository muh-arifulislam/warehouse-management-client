import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>this is inventory </h2>
        </div>
    );
};

export default Inventory;