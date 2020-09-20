import React, {useState, useEffect} from 'react';
//useState holds the info we get from the API, useEffect runs the fetch call when our component mounts
import {Link} from 'react-router-dom';



function Shop() {

    useEffect(() => {
        fetchItems();
        //only going to run when the component mounts
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br');

        const items = await data.json();
        console.log(items)
        console.log(items.data.daily.entries[0].items);
        setItems(items.data.daily.entries[0].items);
    }

    return(
        <div>
            <h1>Shop Page</h1>
            {items.map(items => (
                <h1 key={items.id}>
                    <Link to={`/shop/${items.id}`}>Item name: {items.name}</Link>
                </h1>
            ))}
        </div>
    )
}


export default Shop;