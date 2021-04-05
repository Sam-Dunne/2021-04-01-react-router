import React from 'react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }, []);

    return (
        <main className="row justify-content-around my-3">
            {films?.map(film => (
                <div key={`ghibli-${film.id}`} className="card col-md-3 shadow bg-light m-2">
                    <div className="card-body">
                        <div className="card-title text-center">{film.title}</div>
                        <div className="card-text my-2">`{film.description.substring(0, 100)}...`</div>
                    
                        <Link to={`/films/${film.id}/aboutfilm`} target="_blank">See full details</Link>
                    </div>
                </div>
            ))}
        </main>
    )
};

export default Films;