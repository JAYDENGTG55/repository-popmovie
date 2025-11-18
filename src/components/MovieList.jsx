function MovieItem({ movie, handleOnSelectedMovie }) {
  const fallbackPoster = "https://picsum.photos/200/300?grayscale";

  const handleErrLoading = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackPoster;
  };

  return (
    <li key={movie.imdbID} onClick={() => handleOnSelectedMovie(movie.imdbID)}>
      <img
        src={movie?.Poster || fallbackPoster}
        alt={`${movie.Title} poster`}
        onError={handleErrLoading}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default function MovieList({ movies, handleOnSelectedMovie }) {
  return (
    <ul className="list list-movie">
      {movies?.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          handleOnSelectedMovie={handleOnSelectedMovie}
        />
      ))}
    </ul>
  );
}
