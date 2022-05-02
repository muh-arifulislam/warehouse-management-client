import { useEffect, useState } from "react";

const useItems = (query) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (query === 'all-item') {
            fetch(`https://limitless-falls-03357.herokuapp.com/item`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                    setTimeout(() => setLoading(false), 500);
                })
        }
        if (query === 'six-item') {
            fetch(`https://limitless-falls-03357.herokuapp.com/item?showItem=6`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                    setTimeout(() => setLoading(false), 500);
                })
        }

    }, []);
    return [items, setItems, loading];
}
export default useItems;