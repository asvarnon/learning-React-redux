import React, {useState, useEffect} from 'react';
//useState holds the info we get from the API, useEffect runs the fetch call when our component mounts
import {Link} from 'react-router-dom';


function Item() {

    useEffect(() => {
        fetchItem();
        //only going to run when the component mounts
    }, []);


    //when copied over from shop, initial state of useState below changes from array to object
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.com/v2/shop/br`);
        const item = await fetchItem.json();


        console.log(item);
    };

    return(
        <div>
            <h1>Item:</h1>
        </div>
    )
}


export default Item;