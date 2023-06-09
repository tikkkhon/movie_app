import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FilmsDisplay.css';

function FilmsDisplay({ id, poster, title, year, description, genres }) {
return (
<Link> to {{
  pathname: "/film-page",
  state: {
    poster,
    title,
    year,
    description,
    genres,
  }
}}
<div className="film">
    <img src={poster} alt={title} title={title}/>
    <div className="movie_column">
      <h3 className="movie_title">{title}</h3>
      <h5 className="movie_year">{year}</h5>
      <p className="movie_description">{description.slice(0, 300)}</p>
      <ul className="movie_genres"> 
        {genres.map((genre, index) => {
        return <li key={index} className="genres_genre">{genre}</li>
        })}
      </ul>
    </div>
</div>
</Link>
);
}

FilmsDisplay.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  export default FilmsDisplay;