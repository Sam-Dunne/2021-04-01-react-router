import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const AboutVehicle = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${id}`)
            .then(res => res.json())
            .then(vehicle => setVehicle(vehicle))
    }, [id])

    return (
        <main className="row justify-content-around my-3">

            <div className="card col-md-3 shadow bg-light m-2">
                <div className="card-body">
                    <div className="card-title text-center">Vehicle: {vehicle?.name}</div>
                    <div className="card-text">Description: {vehicle?.description}</div>
                    <div className="card-text">Class: {vehicle?.vehicle_class}</div>
                    <div className="card-text">Length: {vehicle?.length}</div>
                    <Link to={`/vehicles/`}
                        className="btn btn-primary" >Back to All Vehicles</Link>
                </div>
            </div>

        </main>
    )
}


export default AboutVehicle;