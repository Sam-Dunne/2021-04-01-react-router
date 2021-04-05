import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AboutPeople = () => {
    const { id } = useParams();

    const [person, setPerson] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(res => res.json())
            .then(person => setPerson(person))
    }, [id]);

    return (
        <main className="row justify-content-around my-3">
            <div className="card col-md-3 shadow bg-light m-2">
                <div className="card-body">
                    <div className="card-title text-center">{person?.name}</div>
                    <div className="card-text">Gender: {person?.gender}</div>
                    <div className="card-text">Age: {person?.age}</div>
                    <div className="card-text">Eye Color: {person?.eye_color}</div>
                    <div className="card-text">Hair Color: {person?.hair_color}</div>
                    <Link to={`/people/`}
                        className="btn btn-primary" >Back to all Ghibli People</Link>
                </div>
            </div>
        </main>
    )
}

export default AboutPeople;