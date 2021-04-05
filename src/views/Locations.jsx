import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations`)
            .then(res => res.json())
            .then(locations => setLocations(locations))
    }, [])

    return (
        <main className="row justify-content-around my-3">
            {locations?.map(location => (
                <div key={`ghibli-${location.id}`} className="card col-md-3 shadow bg-light m-2">
                    <div className="card-body">
                        <div className="card-title text-center">Location: {location.name}</div>
                        <div className="card-text">Climate: {location.climate}</div>
                        <div className="card-text">Terrain: {location.terrain}</div>
                        <Link to={`/locations/${location.id}/aboutlocation`} target="_blank">More Details</Link>
                    </div>
                </div>

            ))}

        </main>
    )
}

export default Locations;