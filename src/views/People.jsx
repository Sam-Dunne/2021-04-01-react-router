import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people))
    }, []);

    return (
        <main className="row d-flex justify-content-center my-1">
            {people?.map(person => (
                <div key={`ghibli-${person.id}`} className="card col-md-3 col-lg-3 col-xl-3 shadow bg-light m-2">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <div className="card-title text-center ">{person.name}</div>
                        <Link to={`/people/${person.id}/aboutperson`}
                        className="btn btn-primary" >See full details</Link>
                    </div>
                </div>
            ))}
        </main>
    )
};

export default People;