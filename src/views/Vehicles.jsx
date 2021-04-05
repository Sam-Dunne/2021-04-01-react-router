import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(vehicles => setVehicles(vehicles))
    }, []);

    return (
        <main className="row justify-content-around my-3">
            {vehicles?.map(vehicle => (
                <div key={`ghibli-${vehicle.id}`} className="card col-md-3 shadow bg-light m-2">
                    <div className="card-body">
                        <div className="card-title text-center">Vehicle: {vehicle.name}</div>
                       
                        <div className="card-text">Class: {vehicle.vehicle_class}</div>
                       
                        <Link to={`/vehicles/${vehicle.id}/aboutvehicle`}
                            className="btn btn-primary" >See full details</Link>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Vehicles;