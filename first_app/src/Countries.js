import React, { useEffect, useState } from 'react';
import './App.css';


function Countries() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [ items, setItems ] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://restcountries.eu/rest/v2/all'
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return (
        <div className="Countries">
            {items.map(item => (
                <div className="country" key={item.name}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default Countries;
