import React, { useEffect, useState } from 'react';
import './App.css';

function CountryDetails( ) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [ items, setItems ] = useState([]);

    const json_body = {
        LeagueSeasonId: "d9673ce8-4d7b-eb11-b566-0050f2ed1c57",
        orderBy: "MatchDate%20asc",
        IsPlayed: "false",
        PageNumber: "1"
    };

    //League season Id = d9673ce8-4d7b-eb11-b566-0050f2ed1c57
    //Match Id = 30b47b2b-5f7b-eb11-b566-0050f2ed1c57

    const fetchItem = async () => {
        const data = await fetch(
            `https://localhost:44386/api/Match/Get?LeagueSeasonID=${json_body.LeagueSeasonId}&orderBy=${json_body.orderBy}`,             
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return (
        <div className="CountryDetails">
                {items.map(item => (
                    <ul className="list">
                        <li>Home Team: {item.HomeTeam}</li>
                        <li>Away Team: {item.AwayTeam}</li>
                        <li>Match Date: {item.MatchDate} </li>
                        <li>Referee Name: {item.RefereeName}</li>
                    </ul>
                ))}
        </div>
    );
}

export default CountryDetails;
