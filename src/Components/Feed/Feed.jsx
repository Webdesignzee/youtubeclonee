
import React, { Component } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';

const API_KEY = '4ebeb199ccdb428261e35b73ab8286fc'
// const mySecret = process.env['api']
  const SEARCH_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie'; // URL for searching movies
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    if (this.props.query) {
      this.fetchMoviesByQuery(this.props.query);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.fetchMoviesByQuery(this.props.query);
    }
  }

  fetchMoviesByQuery = (query) => {
    fetch(`${SEARCH_MOVIES_URL}?api_key=${API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
      .catch(error => console.error('Error fetching movies by query:', error));
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="card-container">
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.id}`} className="card">
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="card-image" />
            <div className="card-text">{movie.title}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Feed;
