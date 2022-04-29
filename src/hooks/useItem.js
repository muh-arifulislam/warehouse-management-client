import { useState, useEffect } from 'react';
const useItem = (id) => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    useEffect(() => {
        const i = items.find(item => item._id === '4');
        console.log(i);
    }, []);
    return [item, setItem];
}
export default useItem;