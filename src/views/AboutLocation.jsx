import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';





const AboutLocation = () => {
    const { id } = useParams();
    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/${id}.locations`)
        .then(res => res.json())
        .then(location => setLocation(location))
    }, [id]);

    return (
        <main className="row justify-content-around my-3">
            
                <div className="card col-md-3 shadow bg-light m-2">
                    <div className="card-body">
                        <div className="card-title text-center">Location: {location?.name}</div>
                        <div className="card-text">Climate: {location?.climate}</div>
                        <div className="card-text">Terrain: {location?.terrain}</div>
                        <Link to={`/locations`} target="_blank">Back to all Locations</Link>
                    </div>
                </div>

            

        </main>
    )
}

export default AboutLocation;