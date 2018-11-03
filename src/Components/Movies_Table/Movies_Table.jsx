import React, { Component } from 'react';
import { Link } from "react-router-dom";
import movies from './Movies.json'
import './Movies_Table.css'
class MoviesTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies : [],
      nameFilter : '',
      genreFilter : 'Action'
    }
  }

  componentWillMount(){
    this.setState({
      movies,
    })
  }


  filterMoviesByName = (e) => {
    let searchField = e.target.value;
    this.setState(()=>{
      return({
        nameFilter : searchField
      })
    })    
  }

  render() {
    const moviesList = this.state.movies.map((movie) =>{
      if(movie.revenue !== ""){
        if(movie.title.indexOf(this.state.nameFilter) >-1 || movie.genre.indexOf(this.state.genreFilter) >-1){
          return(
            <tr key={Math.random()}>
            <td className="cell" id={movie.title}>
              <Link to={`/comments?movie=${movie.title}`} className="movie-name">
                {movie.title}
              </Link>
            </td>
            <td className="cell">{movie.year}</td>
            <td className="cell">{movie.runtime}</td>
            <td className="cell">${movie.revenue} M</td>
            <td className="cell">{movie.rating}</td>
            <td className="cell">{movie.genre.toString()}</td>
          </tr>
          )
        }
      }
    })
    return (
      <div className="container">
        <div className="movie-table">
        <table className="movie-table table is-striped is-fullwidth">
          <thead>
            <tr>
              <th className="cell">Title</th>
              <th className="cell">Year</th>
              <th className="cell">Runtime</th>
              <th className="cell">Revenue</th>
              <th className="cell">Rating</th>
              <th className="cell">Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell">
                <input className="input titleSearch" type="text" placeholder="Filter By Title" style={{width : 'auto'}} onChange={this.filterMoviesByName}/>
              </td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell">
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>All</option>
                        <option>Action</option>
                        <option>Mystry</option>
                        <option>Thriller</option>
                        <option>Animation</option>
                        <option>Comedy</option>
                      </select>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {moviesList}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default MoviesTable;