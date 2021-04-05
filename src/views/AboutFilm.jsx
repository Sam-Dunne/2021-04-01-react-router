import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const AboutFilm = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [id]);

    return (
        <main className="row justify-content-around my-3">
                <div className="card col-md-11 shadow bg-light m-2">
                    <div className="card-body">
                        <div className="card-title text-center">{film?.title}</div>
                        <div className="card-text my-2">{film?.description}</div>
                        <div className="card-text my-2">Director: {film?.director}</div>
                        <div className="card-text my-2">Producer: {film?.producer}</div>
                        <div className="card-text my-2">Release Date: {film?.release_date}</div>
                        <div className="card-text my-2">Rotten-Tomatoes: {film?.rt_score}</div>
                        <Link to={`/films/`} className="btn btn-primary">Back to all Ghibli Films</Link>
                    </div>
                </div>
        </main>
    )
}

export default AboutFilm;
