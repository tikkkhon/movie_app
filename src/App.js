import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FilmsDisplay from './FilmsDisplay';
import './App.css';

class App extends React.Component {
  state ={
    movies: [],
    isLoading: false,
  };

getMovies = async () => {
  const {
    data: {
      data: {movies},
    },
  } = await axios.get("https://yts.mx/api/v2/list_movies.json");
  this.setState({movies, isLoading: false});
 };

componentDidMount() {
  this.getMovies();
 }

render() {
  const {isLoading, movies} = this.state;
  return ( 
   <section className="container">
    {isLoading 
    ? <div className="loader"> 
        <span className="loader_info">Загрузка</span>
      </div>
    : movies.map((movie) => {
    console.log(movie);
    return ( 
    <div className="movies">
    <FilmsDisplay 
    id={movie.id} 
    poster={movie.medium_cover_image} 
    title={movie.title} 
    year={movie.year} 
    description={movie.summary} 
    genres={movie.genres}
    />
    </div>
    );
  })}
   </section>
  );
 }
} 

/*function App() {
  return (
    <div className="App">
      
    </div>
  );
}*/

export default App;
