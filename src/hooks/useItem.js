import { useState, useEffect } from 'react';
const useItem = (id) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return [item, setItem];
}
export default useItem;