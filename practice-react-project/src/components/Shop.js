import React, {useState, useEffect} from 'react'
//useState holds the info we get from the API, useEffect runs the fetch call when our component mounts

function Shop() {

    useEffect(() => {
        fetchItem();
        //only going to run when the component mounts
    }, []);

    const [entries, setEntries] = useState([]);

    const fetchItem = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br');

        const entries = await data.json();
        console.log(entries.data.daily.entries);
        setEntries(entries.data.daily.entries);
    }

    return(
        <div>
            <h1>Shop Page</h1>
            {entries.map(entry => (
                <h1> item price: ${entry.regularPrice}</h1>
            ))}
        </div>
    )
}


export default Shop;