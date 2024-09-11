
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import './video.css';

const API_KEY = '4ebeb199ccdb428261e35b73ab8286fc';
const MOVIE_DETAILS_URL = 'https://api.themoviedb.org/3/movie';
const TRAILER_BASE_URL = 'https://www.youtube.com/watch?v=';

const Video = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    // Fetch movie details
    fetch(`${MOVIE_DETAILS_URL}/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => console.error('Error fetching movie details:', error));

    // Fetch movie trailers
    fetch(`${MOVIE_DETAILS_URL}/${id}/videos?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const trailer = data.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      })
      .catch(error => console.error('Error fetching movie trailer:', error));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {trailerKey && (
        <ReactPlayer
          className="react-player"
          url={`${TRAILER_BASE_URL}${trailerKey}`}
          controls
          min-width='400px'
          max-width='600px'
        />
      )}

      <div className="movie-details">
        <h2 className='movieDetais'>{movieDetails.title}</h2>
        <p>{movieDetails.overview}</p>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Rating: {movieDetails.vote_average}</p>
        {/* Assuming director information is not available from TMDb */}
        <p>Director: Director's Name</p>
        {/* Display at least four images */}
        {/* <div className="movie-images">
          {movieDetails.images.backdrops.slice(0, 4).map((image, index) => (
            <img key={index} src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt={`Backdrop ${index}`} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Video;

