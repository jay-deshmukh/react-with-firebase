import React  from "react";
import { Link } from "react-router-dom";

const MovieRow = ({movie}) => {
  let movieHr = Math.floor(movie.runtime / 60 );
  let movieMins = Math.floor(movie.runtime % 3600 % 60);
  return(
    <tr>
      <td className="cell" id={movie.title}>
        <Link to={`/comments?movie=${movie.title}`} className="movie-name">
          {movie.title}
        </Link>
      </td>
      <td className="cell">{movie.year}</td>
      <td className="cell">{movieHr}h {movieMins}m</td>
      <td className="cell">${movie.revenue} M</td>
      <td className="cell">{movie.rating}</td>
      <td className="cell">{movie.genre.toString()}</td>
    </tr>
  )
}


export default MovieRow;