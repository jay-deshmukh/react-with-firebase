import React, { Component } from 'react';
import MovieRow from "../../Containers/Movie_Row";
import movies from './Movies.json'
import './Movies_Table.css'
class MoviesTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies : [],
      nameFilter : '',
      genreFilter : ','
    }
  }

  componentWillMount(){
    this.setState({
      movies,
    })
  }


  setMovieState = (e) => {
    let searchField = e.target.value;    
    this.setState(()=>{
      return({
        nameFilter : searchField
      })
    })    
  }

  setGenreState = (e) => {
    const genreFilter = e.target.value;
    if(genreFilter === 'All'){
      this.setState(()=>{
        return({genreFilter : ','})
      })  
    }else{
      this.setState(()=>{
        return({genreFilter})
      })  
    }
  }

  render() {
    const moviesList = this.state.movies.map((movie , i) => {
      if(movie.revenue !== "" && movie.title.indexOf(this.state.nameFilter) >-1  && movie.genre.toString().indexOf(this.state.genreFilter) >= 0){
        return(
          <MovieRow movie={movie} key={i}/>
        )
      }else{
        return <tr key={i}></tr>;
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
                <input className="input titleSearch" type="text" placeholder="Filter By Title" onChange={this.setMovieState}/>
              </td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell">
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select onChange={this.setGenreState}>
                        <option>All</option>
                        <option>Action</option>
                        <option>Mystery</option>
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