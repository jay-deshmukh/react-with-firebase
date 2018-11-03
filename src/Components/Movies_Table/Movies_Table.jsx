import React, { Component } from 'react';
import Comments from "../Comments/Comments";
import './Movies_Table.css'
import movies from './Movies.json'
class MoviesTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies : [],
    }
  }

  componentDidMount(){
    this.setState({
      movies
    })
  }

  showModal = () => {
    const element = document.getElementById('commentsModal')
    element.classList.add('is-active');
  }
  render() {
    return (
      <div className="container">
        <Comments />
        <div className="movie-table">
        <table className="movie-table table is-striped  is-fullwidth">
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
                <input className="input titleSearch" type="text" placeholder="Filter By Title" style={{width : 'auto'}}/>
              </td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell"></td>
              <td className="cell">
              </td>
              <td className="cell">
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>All</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="cell" onClick={this.showModal}>Alpha</td>
              <td className="cell">2109</td>
              <td className="cell">2H</td>
              <td className="cell">2M</td>
              <td className="cell">2.9</td>
              <td className="cell">Action</td>
            </tr>
            <tr>
              <td className="cell">Bravo</td>
              <td className="cell">2109</td>
              <td className="cell">2H</td>
              <td className="cell">2M</td>
              <td className="cell">2.9</td>
              <td className="cell">Action</td>
            </tr>
            <tr>
              <td className="cell">Bravo</td>
              <td className="cell">2109</td>
              <td className="cell">2H</td>
              <td className="cell">2M</td>
              <td className="cell">2.9</td>
              <td className="cell">Action</td>
            </tr>
            <tr>
              <td className="cell">Bravo</td>
              <td className="cell">2109</td>
              <td className="cell">2H</td>
              <td className="cell">2M</td>
              <td className="cell">2.9</td>
              <td className="cell">Action</td>
            </tr>
            <tr>
              <td className="cell">Bravo</td>
              <td className="cell">2109</td>
              <td className="cell">2H</td>
              <td className="cell">2M</td>
              <td className="cell">2.9</td>
              <td className="cell">Action</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default MoviesTable;