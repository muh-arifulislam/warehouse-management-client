import { useState, useEffect } from 'react';
const useItem = (id) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://limitless-falls-03357.herokuapp.com//item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return [item, setItem];
}
export default useItem;