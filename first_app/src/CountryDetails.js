import React, { useEffect, useState } from 'react';
import './App.css';

function CountryDetails({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [ item, setItem ] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(
            `https://restcountries.eu/rest/v2/name/${match.params.name}`
        );

        const item = await data.json();
        console.log(item);
        setItem(item);
    };

    return (
        <div className="CountryDetails">
            {item.map(item => (
                <ul className="list">
                    <li>Country: {item.name}</li>
                    <li>Capital: {item.capital}</li>
                    <li>Population: {item.population}</li>
                </ul>
            ))}
        </div>
    );
}

export default CountryDetails;
