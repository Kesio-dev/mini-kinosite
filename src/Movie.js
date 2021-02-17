import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'


function Movie({ id, year, title, summary, medium_cover_image, url }) {
    return (
        <div className='movie'>
            <img src={medium_cover_image} alt={title} title={title}/>
            <div className="movie__column">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <a className='btn' href={url}>DOWDOLAND</a>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

export default Movie;